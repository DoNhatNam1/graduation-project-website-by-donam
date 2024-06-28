

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

  // Lấy URL từ router
  const currentUrl = await GetPath();

  // Phân tích URL để lấy hostname
  const parsedUrl = new URL(currentUrl);
  const hostname = parsedUrl.hostname;

  // Lấy cụm từ "cafe" từ hostname
  const hostnameParts = hostname?.split('.');
  const domainValue = hostnameParts?.[0];
  return (
    <>
    <LoginForm domainValue={domainValue} />
    </>
  )
}
