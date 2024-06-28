

import { cookies } from "next/headers"
import LoginForm from "../../Ui/Forms/LoginForm"
import { useRouter } from 'next/router';
import { URL } from 'url';

export default async function PcLoginPageComponent() {
  const cookieStore = cookies()
  const path = cookieStore.get('agencyDomain')!.value
  const router = useRouter();

  // Lấy URL từ router
  const currentUrl = router.asPath;

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
