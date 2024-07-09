

import dynamic from 'next/dynamic'
import PcTermsOfUsePageComponent from './_components/Devices/PC/PcTermsOfUsePageComponent';
 
const ResponsiveComponent = dynamic(() => import("./_components/ResponsiveComponent"), { ssr: false })

export default async function Page() {

  return (
    <>
    <ResponsiveComponent
      PcTermsOfUsePageComponent={<PcTermsOfUsePageComponent/>}
     />
    </>
  );
}


import React, { useState, useEffect, useRef } from 'react';

