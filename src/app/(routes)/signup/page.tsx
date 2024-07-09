

import dynamic from 'next/dynamic'
import PcSignUpPageComponent from './_components/Devices/PC/PcSignUpPageComponent';
 
const ResponsiveComponent = dynamic(() => import("./_components/ResponsiveComponent"), { ssr: false })

export default async function Page() {

  return (
    <>
    <ResponsiveComponent
      PcSignUpPageComponent={<PcSignUpPageComponent/>}
     />
    </>
  );
}


