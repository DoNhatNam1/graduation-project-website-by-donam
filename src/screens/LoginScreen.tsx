
import Image from "next/image";
import img_assets2F46998d0431f84955ab18b5f45141d4dc2Ff86974f23f8844d6a9f0288fef69b208 from '@/public/assets2F46998d0431f84955ab18b5f45141d4dc2Ff86974f23f8844d6a9f0288fef69b208.png';
import img_a8edc996d6a854431c488542e3eac2d78e74caeba11585878eb9eef92d6c085b from '@/public/a8edc996d6a854431c488542e3eac2d78e74caeba11585878eb9eef92d6c085b.png';
import img_3bce0da22153ddd0c37f0fb8229569977bb6c6ee21f0370fe3189660c9f0b317 from '@/public/3bce0da22153ddd0c37f0fb8229569977bb6c6ee21f0370fe3189660c9f0b317.svg';
import LoginForm from "@/src/app/(routes)/login/_components/LoginForm";


export default async function LoginScreen() {

  return (
    <>
    <main className="flex overflow-hidden relative flex-col justify-center min-h-screen">
      <Image
        src={img_assets2F46998d0431f84955ab18b5f45141d4dc2Ff86974f23f8844d6a9f0288fef69b208}
        alt=""
        fill
        width={0}
        height={0}
        sizes='100vw'
        className="absolute inset-0 object-cover"
      />
      <section className="flex relative justify-center items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[420px]">
          <div className="flex flex-col justify-center py-12">
            <article className="flex flex-col pt-5 rounded-3xl bg-neutral-700">
              <header className="flex flex-col">
                <div className="flex justify-center items-center px-16 max-md:px-5">
                  <div className="flex gap-5">
                    <div className="flex justify-center items-center">
                      <Image
                        src={img_a8edc996d6a854431c488542e3eac2d78e74caeba11585878eb9eef92d6c085b}
                        alt="WeldingStore Logo"
                        width={50}
                        height={61}
                      />
                    </div>
                    <h1 className="my-auto text-2xl font-bold text-slate-50">
                      WeldingStore
                    </h1>
                  </div>
                </div>
                <h2 className="self-center text-sm font-bold text-slate-50">
                  Đăng nhập
                </h2>
              </header>

              <LoginForm />
            </article>
          </div>

          <footer className="flex justify-center items-center px-16 mt-2.5 text-base text-white max-md:px-5">
            <div className="flex gap-1.5">
              <Image
                src={img_3bce0da22153ddd0c37f0fb8229569977bb6c6ee21f0370fe3189660c9f0b317}
                alt=""
                width={20}
                height={18}
                className="shrink-0 self-start fill-slate-50"
              />
              <p>Hỗ trợ: 0363982926</p>
            </div>
          </footer>
        </div>
      </section>
    </main>
    </>
  )
}
