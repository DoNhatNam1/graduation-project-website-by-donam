
import { getSession, logout } from "@/src/Actions/POST/HomePage/Authentication";
import { redirect } from "next/navigation";

export  default async function Page() {
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
    </div>
  )
}
