import Image from "next/image";
import footerlogo from "@/public/footerbackground.png";
import img_assets2Fe454d901b26c4ee0bac5b3f0f055fadf2Fee2ff5d9a69f4cf9893c537a0755aed6 from "@/public/assets2Fe454d901b26c4ee0bac5b3f0f055fadf2Fee2ff5d9a69f4cf9893c537a0755aed6.png";
import img_c468c0cdbb26d7d78e34e3e3f3864fbf0e9a34342a648d0a4d2b602dd3fcc5eb from "@/public/c468c0cdbb26d7d78e34e3e3f3864fbf0e9a34342a648d0a4d2b602dd3fcc5eb.png";

export default function Footer() {
  return (
    <footer className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-16 w-full min-h-[587px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <Image
        alt="Footer Background"
        sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w"
        loading="lazy"
        src={
          img_assets2Fe454d901b26c4ee0bac5b3f0f055fadf2Fee2ff5d9a69f4cf9893c537a0755aed6
        }
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative justify-center mt-14 mb-5 max-w-full w-[930px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow self-stretch pb-20 max-md:mt-10">
              <div className="flex flex-col justify-center items-start max-md:pr-5">
                <Image
                  loading="lazy"
                  src={footerlogo}
                  alt="WeldingStore logo"
                  className="max-w-full aspect-[3.85] w-[189px]"
                />
              </div>
              <p className="justify-center mt-8 text-base text-slate-50">
                @ 2024 CopyRight By NamIT <br /> All right reserved
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <nav className="flex relative flex-col grow self-stretch pb-20 text-base text-slate-50 max-md:mt-10 space-y-4">
              <section>
                <h3 className="justify-center text-xl font-bold text-green-600">
                  Tư vấn bán hàng
                </h3>
                <a 
                href="#" 
                className="underline text-lg"
                >
                  1890 4444
                  </a>
              </section>
              <section>
                <h3 className="justify-center text-xl font-bold text-green-600">
                  Chăm sóc khách hàng
                </h3>
                <a 
                href="#" 
                className="underline text-lg"
                >
                  1990 2222
                  </a>
              </section>
            </nav>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow self-stretch max-md:mt-10">
              <div className="flex flex-col text-slate-50">
                <h3 className="justify-center text-xl font-bold">
                  Tải xuống xu hướng bán hàng trực tuyến năm 2024
                </h3>
                <p className="justify-center mt-3.5 text-base">
                  Nhập email của bạn và chúng tôi sẽ gửi cho bạn hỗ trợ chi tiết
                  về thị trường WeldingStore.
                </p>
              </div>
              <form className="flex flex-col pb-16 mt-5">
                <label htmlFor="emailInput" className="sr-only">
                  Địa chỉ Email
                </label>
                <input
                  id="emailInput"
                  type="email"
                  placeholder="Nhập Email"
                  className="justify-center py-2.5 pr-5 pl-4 text-sm font-bold bg-fuchsia-800 rounded-xl text-slate-50 max-md:pl-5"
                  aria-label="Nhập Email"
                />
                <button
                  type="submit"
                  className="flex gap-2.5 justify-center self-end py-2.5 pr-2.5 pl-3.5 mt-5 bg-pink-500 rounded-xl">
                  <span className="flex-1 justify-center text-sm font-bold text-center text-slate-50">
                    Gửi
                  </span>
                  <Image
                    alt="Send Icon"
                    loading="lazy"
                    src={
                      img_c468c0cdbb26d7d78e34e3e3f3864fbf0e9a34342a648d0a4d2b602dd3fcc5eb
                    }
                    className="w-5 aspect-square"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
