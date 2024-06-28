


type NavItemProps = {
    text: string;
  };

export default function NavItem ({ text }: NavItemProps) {
    return(
    <>
      <div className="flex flex-col justify-center px-2 py-6 rounded-md border-r border-solid border-neutral-400">
        <div className="justify-center px-7 max-md:px-5">{text}</div>
      </div>
    </>
)
}