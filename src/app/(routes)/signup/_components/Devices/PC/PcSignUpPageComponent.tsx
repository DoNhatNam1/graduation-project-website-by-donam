
import Image from "next/image";
import SignupForm from "../../Ui/Forms/SignupForm";
import Link from "next/link";
import img_67feeadbb54e54270d63985ef973d3281162bcb7136730880ef709228dc0432d from '@/public/67feeadbb54e54270d63985ef973d3281162bcb7136730880ef709228dc0432d.png';
import img_b1e95496ef3c1d89a4d4c4c3e9d5701b2c0bfa0e3b2507d8f3fab66419a2e32e from '@/public/b1e95496ef3c1d89a4d4c4c3e9d5701b2c0bfa0e3b2507d8f3fab66419a2e32e.svg';

export default function PcSignUpPageComponent() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center bg-white">
      <div className="justify-between w-full h-full align-middle max-md:max-w-full">
        <div className="w-full h-full flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch text-center text-white max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full h-full max-md:px-5 max-md:max-w-full">
                <Image
                  src={img_67feeadbb54e54270d63985ef973d3281162bcb7136730880ef709228dc0432d}
                  alt="Background image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="flex relative flex-col justify-between gap-10 mt-44 mb-32 max-w-full w-[498px] max-md:my-10">
                  <h1 className="justify-center text-4xl font-bold max-md:max-w-full">
                    Quản lý dễ dàng Bán hàng đơn giản
                  </h1>
                  <p className="justify-center text-base max-md:max-w-full">
                    Hỗ trợ đăng ký 1800 6162
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch max-md:max-w-full">
              <div className="flex flex-col justify-center p-5 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex flex-col justify-center items-end max-md:pl-5 max-md:max-w-full">
                    <div className="flex justify-center items-center p-1.5 w-6">
                      <Link 
                      href='/' 
                      className="cursor-pointer"
                      >
                      <Image
                        src={img_b1e95496ef3c1d89a4d4c4c3e9d5701b2c0bfa0e3b2507d8f3fab66419a2e32e}
                        alt="Close button"
                        width={24}
                        height={24}
                        className="w-full h-full aspect-square"
                        />
                        </Link>
                    </div>
                  </div>
                  {/* Sign up form validation */}
                  <SignupForm />
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
