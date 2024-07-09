"use client";

import MediaQuery from "react-responsive";
// import LaptopHomePageComponent from "./Devices/Laptop/LaptopHomePageComponent";
// import IpadHomePageComponent from "./Devices/Ipad/IpadHomePageComponent";

const ResponsiveComponent = ({
  PcSignUpPageComponent,
}: {
  PcSignUpPageComponent: React.ReactNode;
}) => {
  return (
    <>
      <MediaQuery maxWidth={770}>
        {/* <IpadHomePageComponent /> */}
        {PcSignUpPageComponent}

      </MediaQuery>
      <MediaQuery minWidth={771} maxWidth={1455}>
        {/* <LaptopHomePageComponent /> */}
        {PcSignUpPageComponent}

      </MediaQuery>
      <MediaQuery minWidth={1456}>
        {PcSignUpPageComponent}
      </MediaQuery>
    </>
  );
};

export default ResponsiveComponent;
