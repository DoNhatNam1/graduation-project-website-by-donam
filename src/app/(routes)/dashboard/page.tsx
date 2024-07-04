
import { getSession, logout } from "@/src/Actions/POST/HomePage/Authentication";
import { redirect } from "next/navigation";

export  default async function page() {
    const session = await getSession();
  return (
    <div>
    <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
         <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
