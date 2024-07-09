

import dynamic from 'next/dynamic'
import PcHomePageComponent from './_components/Devices/PC/PcHomePageComponent';
import LaptopHomePageComponent from './_components/Devices/Laptop/LaptopHomePageComponent';
import IpadHomePageComponent from './_components/Devices/Ipad/IpadHomePageComponent';
const ResponsiveComponent = dynamic(() => import("./_components/ResponsiveComponent"), { ssr: false })

export default async function Page() {
  return (
    <>
    <ResponsiveComponent
      PcHomePageComponent={<PcHomePageComponent/>}
      LaptopHomePageComponent={<LaptopHomePageComponent/>}
      IpadHomePageComponent={<LaptopHomePageComponent/>}
     />
    </>
  );
}


