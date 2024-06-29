

import { cookies } from "next/headers"
import LoginForm from "../../Ui/Forms/LoginForm"
import { URL } from 'url';

async function GetPath() {
  'use server'

  const response = await fetch('/api/handler');
  const data = await response.json();

  return data.domainValue;
}

export default async function PcLoginPageComponent() {
  // const cookieStore = cookies()
  // const path = cookieStore.get('agencyDomain')!.value
  return (
    <>
    <LoginForm />
    </>
  )
}
