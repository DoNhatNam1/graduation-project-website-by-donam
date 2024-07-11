
type StatProps = {
    number: string;
    text: string;
  };
   
  export default function PCStat({ number, text }: StatProps) {
    return (
      <>
    <>
      <div className="flex flex-col">
        <div className="text-xl text-blue-600">{number}</div>
        <div className="mt-2.5 text-sm text-neutral-400">{text}</div>
      </div>
    </>
      </>
    )
  }
  