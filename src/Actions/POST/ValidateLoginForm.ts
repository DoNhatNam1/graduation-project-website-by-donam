"use server" // Sử dụng server mode
import prisma from "@/src/libs/prismaDb"; 


export default async function ValidateLoginForm(InputData:any) {
    const user = await prisma.tbUser.findFirst({
        select: {
            id: true
        },
        where: {
          username: InputData.username,
          password: InputData.password,
        },
      });

      return user;

}
