

import dynamic from 'next/dynamic'
import PcHomePageComponent from './_components/Devices/PC/PcHomePageComponent';
 
const ResponsiveComponent = dynamic(() => import("./_components/ResponsiveComponent"), { ssr: false })

export default async function Page() {
  return (
    <>
    <ResponsiveComponent
      PcHomePageComponent={<PcHomePageComponent/>}
     />
    </>
  );
}


