
import img_62dc94148b7b7840975538f8ad040a8d0ec998758d0c9246d302915a36c0c626 from "@/public/62dc94148b7b7840975538f8ad040a8d0ec998758d0c9246d302915a36c0c626.png";
import Image from "next/image";

import Link from "next/link";
import MenuIcon from "../../Ui/Icons/MenuIcon";
import CloseIcon from "../../Ui/Icons/CloseIcon";
import { ButtonHeaderLogin, ButtonHeaderSignup } from "@/src/app/(root)/_components/ButtonHeader";

const NavItemsData = [
  {
    path: "/products",
    text: "Sản phẩm",
  },
  {
    path: "/solutions",
    text: "Giải pháp",
  },
  {
    path: "/service-charge",
    text: "Phí dịch vụ",
  },
  {
    path: "/support-contact",
    text: "Hỗ trợ",
  },
  {
    path: "/news",
    text: "Tin tức",
  },
  {
    path: "/about-us",
    text: "Về WeldingStore",
  },
];

export default function NavBar() {
  return (
    <header className="w-full fixed flex gap-0 justify-between px-8 py-2.5 bg-slate-900 max-md:flex-wrap max-md:px-5 z-40">
      <div className="flex justify-center items-center my-auto">
        <Image
          alt="Welding Store Logo"
          sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w"
          src={
            img_62dc94148b7b7840975538f8ad040a8d0ec998758d0c9246d302915a36c0c626
          }
          className="aspect-[0.82] w-[50px]"
        />
      </div>
      <nav className="flex flex-1 justify-end gap-2.5 pl-20 text-slate-50 max-md:flex-wrap">
        <section className="relative w-full overflow-hidden desktop:hidden">
          <input
            type="checkbox"
            id="open"
            className="peer/open absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="peer-checked/open:hidden absolute top-3 right-3 text-white transition-transform duration-500">
            <MenuIcon />
          </div>
          <div className="invisible peer-checked/open:visible absolute top-3 right-3 text-white">
            <CloseIcon />
          </div>

          {/* Model menu */}
          <div className="translate-x-[9999px] peer-checked/open:translate-x-0 peer-checked/open:translate-y-14 transition-all duration-300 fixed top-5 right-12 w-[500px] h-[520px] rounded-md bg-gray-700 z-50 flex flex-col gap-3 p-4">
            <div className="flex flex-col gap-0 justify-center px-px text-base">
              {NavItemsData.map((items, index) => (
                <Link key={index} href={items.path}>
                  <div className="flex flex-col justify-center px-2 py-6 rounded-md border-r border-solid border-neutral-400 shadow hover:shadow-md hover:shadow-slate-200">
                    <div className="justify-center px-7 max-md:px-5">
                      {items.text}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="w-full h-full flex flex-1 gap-2.5 gap-y-2.5 justify-center content-center my-auto text-sm font-bold">
              <ButtonHeaderSignup />
              <ButtonHeaderLogin />
            </div>
          </div>
        </section>

        {/* NavItems */}
        <section className="mobile:max-desktop:hidden">
          <div className="flex gap-0 justify-center px-px text-base max-md:flex-wrap">
            {NavItemsData.map((items, index) => (
              <Link key={index} href={items.path}>
                <div className="flex flex-col justify-center px-2 py-6 rounded-md border-r border-solid border-neutral-400 shadow hover:shadow-md hover:shadow-slate-200">
                  <div className="justify-center px-7 max-md:px-5">
                    {items.text}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Button Group */}
        <section className="mobile:hidden desktop:block">
          <div className="w-full h-full flex gap-2.5 justify-between content-center my-auto text-sm font-bold pt-4">
            <ButtonHeaderSignup />
            <ButtonHeaderLogin />
          </div>
        </section>
      </nav>
    </header>
  );
}
