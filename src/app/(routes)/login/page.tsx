

import dynamic from 'next/dynamic'
import PcLoginPageComponent from './_components/Devices/PC/PcLoginPageComponent';
import { useRouter } from 'next/router';
 
const ResponsiveComponent = dynamic(() => import("./_components/ResponsiveComponent"), { ssr: false })

export default async function Page() {
  const { asPath } = useRouter();
  const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : '';
    
    const URL = `${origin}${asPath}`;
    console.log(URL);
  return (
    <>
    <ResponsiveComponent
      PcLoginPageComponent={<PcLoginPageComponent/>}
     />
    </>
  );
}


