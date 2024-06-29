

import { cookies } from "next/headers"
import LoginForm from "../../Ui/Forms/LoginForm"


export default async function PcLoginPageComponent() {
  // const cookieStore = cookies()
  // const path = cookieStore.get('agencyDomain')!.value
  return (
    <>
    <LoginForm />
    </>
  )
}
