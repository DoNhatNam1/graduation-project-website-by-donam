"use client";

import MediaQuery from "react-responsive";

const ResponsiveComponent = ({
  PcHomePageComponent,
  LaptopHomePageComponent,
  IpadHomePageComponent,
}: {
  PcHomePageComponent: React.ReactNode;
  LaptopHomePageComponent: React.ReactNode;
  IpadHomePageComponent: React.ReactNode;
}) => {
  return (
    <>
      <MediaQuery maxWidth={770}>
        {PcHomePageComponent}
      </MediaQuery>
      <MediaQuery minWidth={771} maxWidth={1455}>
        {PcHomePageComponent}
      </MediaQuery>
      <MediaQuery minWidth={1456}>
        {PcHomePageComponent}
      </MediaQuery>
    </>
  );
};

export default ResponsiveComponent;
