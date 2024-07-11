"use server";

import prisma from "@/src/libs/prismaDb";
import { AccountType } from "@/src/types/login";
import { SignupType } from "@/src/types/signup";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

let path = process.env.NEXT_PUBLIC_HOSTNAME_PATH;
// let secretKey = process.env.SECRET_KEY;
let secretKey = 'uRLguHs7Y6Wg0UEwX0lFQcuaFSyWHpRz';
let key = new TextEncoder().encode(String(secretKey));

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(InputData: AccountType, splitHostName: string) {
  let user = null;

  switch (InputData.role) {
    case "Admin":
      user = await prisma.tbAdmin.findFirst({
        where: {
          phone_number: InputData.phone_number,
          password: InputData.password,
        },
      });
      break;

    case "Agency":
      user = await prisma.tbAgencyAccount.findFirst({
        where: {
          phone_number: InputData.phone_number,
          password: InputData.password,
        },
      });
      break;

    case "SubAccount":
      user = await prisma.tbSubAccount.findFirst({
        where: {
          phone_number: InputData.phone_number,
          password: InputData.password,
        },
      });
      break;

    default:
      break;
  }

  if (!user || user.urlhost !== splitHostName) {
    throw new Error("Sai thông tin đăng nhập, vui lòng thử lại!");
  }

  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true });

  redirect(`http://${splitHostName}.${path}/dashboard`);
}

export async function checkSignUpData(InputData: SignupType){
  const query = await prisma.tbAgencyAccount.findUnique({
    where: {
      phone_number: InputData.phone_number,
    }
  });

  if(query){
    throw new Error("Số điện thoại này đã có tài khoản tồn tại!");
  }

  if (cookies().get("inputData")) {
    cookies().delete("inputData");
  }

  cookies().set({
    name: 'inputData',
    value: JSON.stringify(InputData),
    httpOnly: true,
    path: '/signup/choose-bussiness',
  })
  
}

// export async function signup(InputData: SignupType){

// }

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });

  redirect(`http://${path}`);
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
