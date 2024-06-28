

import NavItem from "./NavItem";
import img_62dc94148b7b7840975538f8ad040a8d0ec998758d0c9246d302915a36c0c626 from '@/public/62dc94148b7b7840975538f8ad040a8d0ec998758d0c9246d302915a36c0c626.png';
import Image from "next/image";
import { PCButtonHeaderSignup, PCButtonHeaderLogin } from "../../../Ui/Buttons/PCButtonHeader";

export default function PCHeader() {
  return (
    <header className="flex gap-0 justify-between px-8 py-2.5 bg-slate-900 max-md:flex-wrap max-md:px-5">
      <div className="flex justify-center items-center my-auto">
      <Image alt="Replace with an informative alt text" sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w"
              loading="lazy"
              src={img_62dc94148b7b7840975538f8ad040a8d0ec998758d0c9246d302915a36c0c626}
              className="aspect-[0.82] w-[50px]"
            />
      </div>

      <nav className="flex flex-1 justify-end gap-2.5 pl-20 text-slate-50 max-md:flex-wrap">
        <div className="flex gap-0 justify-center px-px text-base max-md:flex-wrap">
          <NavItem text="Sản phẩm" />
          <NavItem text="Giải pháp" />
          <NavItem text="Khách hàng" />
          <NavItem text="Phí dích vụ" />
          <NavItem text="Hỗ trợ" />
          <NavItem text="Tin tức" />
          <NavItem text="Về WeldingStore" />
        </div>
        <div className="flex flex-wrap gap-2.5 gap-y-2.5 justify-between content-center my-auto text-sm font-bold">
            <PCButtonHeaderSignup />
            <PCButtonHeaderLogin />
        </div>
      </nav>
    </header>
  );
}
