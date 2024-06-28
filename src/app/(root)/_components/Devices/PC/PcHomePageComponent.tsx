
import PCFooter from "./LayoutProps/PCFooter";
import PCHeader from "./LayoutProps/PCHeader";
import PCMain from "./LayoutProps/PCMain";

export default function PcHomePageComponent() {
  return (
    <>
      <div className="flex flex-col bg-neutral-700">
        <PCHeader/>
        <PCMain/>
        <PCFooter/>
      </div>
    </>
  );
}
