"use client";

import MediaQuery from "react-responsive";
// import LaptopHomePageComponent from "./Devices/Laptop/LaptopHomePageComponent";
// import IpadHomePageComponent from "./Devices/Ipad/IpadHomePageComponent";

const ResponsiveComponent = ({
    PcLoginPageComponent,
}: {
    PcLoginPageComponent: React.ReactNode;
}) => {
  return (
    <>
      <MediaQuery maxWidth={770}>
        {/* <IpadHomePageComponent /> */}
      </MediaQuery>
      <MediaQuery minWidth={771} maxWidth={1455}>
        {/* <LaptopHomePageComponent /> */}
      </MediaQuery>
      <MediaQuery minWidth={1456}>
        {PcLoginPageComponent}
      </MediaQuery>
    </>
  );
};

export default ResponsiveComponent;
