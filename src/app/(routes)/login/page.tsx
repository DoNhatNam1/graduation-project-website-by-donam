

import dynamic from 'next/dynamic'
import PcLoginPageComponent from './_components/Devices/PC/PcLoginPageComponent';
 
const ResponsiveComponent = dynamic(() => import("./_components/ResponsiveComponent"), { ssr: false })

export default async function Page() {
  return (
    <>
    <ResponsiveComponent
      PcLoginPageComponent={<PcLoginPageComponent/>}
     />
    </>
  );
}


