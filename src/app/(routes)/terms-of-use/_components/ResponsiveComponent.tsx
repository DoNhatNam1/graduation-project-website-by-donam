"use client";

import MediaQuery from "react-responsive";
// import LaptopHomePageComponent from "./Devices/Laptop/LaptopHomePageComponent";
// import IpadHomePageComponent from "./Devices/Ipad/IpadHomePageComponent";

const ResponsiveComponent = ({
  PcTermsOfUsePageComponent,
}: {
  PcTermsOfUsePageComponent: React.ReactNode;
}) => {
  return (
    <>
      <MediaQuery maxWidth={770}>
        {/* <IpadHomePageComponent /> */}
        {PcTermsOfUsePageComponent}
      </MediaQuery>
      <MediaQuery minWidth={771} maxWidth={1455}>
        {/* <LaptopHomePageComponent /> */}
        {PcTermsOfUsePageComponent}
      </MediaQuery>
      <MediaQuery minWidth={1456}>{PcTermsOfUsePageComponent}</MediaQuery>
    </>
  );
};

export default ResponsiveComponent;
