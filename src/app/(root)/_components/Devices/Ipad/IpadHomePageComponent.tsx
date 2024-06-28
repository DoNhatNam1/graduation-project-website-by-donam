"use client";

import React from "react";

type IconProps = {
  src: string;
  alt: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

type NavItemProps = {
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <div className="flex flex-col justify-center px-2 py-6 rounded-md border-r border-solid border-neutral-400">
    <div className="justify-center px-7 max-md:px-5">{text}</div>
  </div>
);

type StatProps = {
  number: string;
  text: string;
};

const Stat: React.FC<StatProps> = ({ number, text }) => (
  <div className="flex flex-col">
    <div className="text-xl text-blue-600">{number}</div>
    <div className="mt-2.5 text-sm text-neutral-400">{text}</div>
  </div>
);

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col grow justify-center px-6 py-5 w-full bg-black rounded-[30px] max-md:px-5 max-md:mt-6">
    <div className="flex justify-center items-center self-center px-3 bg-sky-100 h-[90px] rounded-[45px] w-[90px]">
      <img
        loading="lazy"
        src={icon}
        alt={title}
        className="w-full aspect-square"
      />
    </div>
    <div className="flex-wrap justify-center mt-5 text-xl text-center text-slate-50">
      {title}
    </div>
    <div className="flex-wrap justify-center content-center mt-5 text-base text-center text-neutral-200">
      {description}
    </div>
  </div>
);

type IndustryItemProps = {
  icon: string;
  text: string;
};

const IndustryItem: React.FC<IndustryItemProps> = ({ icon, text }) => (
  <div className="flex flex-1 gap-0">
    <img
      loading="lazy"
      src={icon}
      alt={text}
      className="shrink-0 my-auto aspect-square fill-white w-[25px]"
    />
    <div className="flex-1 justify-center p-2.5">{text}</div>
  </div>
);

type SupportChannelProps = {
  icon: string;
  title: string;
  description: string | any;
};

const SupportChannel: React.FC<SupportChannelProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col flex-wrap content-start self-stretch px-4 py-5 m-auto w-full font-bold bg-black rounded-3xl max-md:mt-7">
    <div className="flex gap-2 text-base text-slate-50">
      <img
        loading="lazy"
        src={icon}
        alt={title}
        className="shrink-0 w-6 aspect-square"
      />
      <div>{title}</div>
    </div>
    <div className="mt-2.5 text-sm text-neutral-400">{description}</div>
  </div>
);

const IpadHomePageComponent: React.FC = () => {
  return (
    <div className="flex flex-col bg-neutral-700">
      <header className="flex gap-0 justify-between px-8 py-2.5 w-full bg-slate-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center my-auto">
          <Icon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1df5837559558ef7d218c01de79efeab69208624e5e6f17b78b43902ead1f5c8?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
            alt="Logo"
            className="aspect-[0.82] w-[50px]"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center items-end px-16 py-2 max-md:max-w-full">
          <div className="flex justify-center items-center px-5 py-2 w-[86px]">
            <Icon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a4db91a7fb0b910a608de3a4d00de35af54b0d8c2490c866fca38eddca4f2d3?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
              alt="Menu"
              className="w-full aspect-[1.28] fill-slate-50"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-12 w-full font-bold min-h-[634px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c971bae45094db0a69fa36a20832f0cdbc8bfb926aeebe35ff0717e88fd3cdd?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
            alt="Background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col justify-center py-20 max-w-full w-[732px] max-md:mr-2.5">
            <h1 className="flex-wrap justify-center content-end self-center p-2.5 max-w-full text-5xl text-slate-900 w-[521px] max-md:max-w-full max-md:text-4xl">
              Phần mềm quản lý bán hàng phổ biến nhất
            </h1>
            <div className="flex justify-center items-center px-16 mt-7 text-xl text-slate-50 max-md:px-5 max-md:max-w-full">
              <button className="justify-center px-8 py-4 bg-blue-600 rounded-2xl max-md:px-5">
                Dùng thử miễn phí
              </button>
            </div>
            <div className="flex flex-wrap justify-center content-end items-center px-16 mt-7 font-semibold max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between max-w-full w-[500px] max-md:flex-wrap">
                <Stat number="300.000+" text="nhà kinh doanh sử dụng" />
                <Stat number="10.000+" text="nhà kinh doanh mới mỗi tháng" />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <h2 className="flex-wrap justify-center content-center px-2.5 text-4xl font-bold text-center text-slate-50 max-md:max-w-full">
            WeldingStore giúp bạn quản lý dễ dàng, bán hàng hiệu quả
          </h2>
          <div className="flex justify-center items-center px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex-wrap content-center w-full max-w-[1100px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <Feature
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3aea84a397685ff53ae147124d390cc00c9dba4997e91cc3c2010868e83cdd14?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                  title="Đơn giản, dễ xử dụng"
                  description="Giao diện đơn giản, thân thiện và thông minh. Chỉ mất 15 phút làm quen"
                />
                <Feature
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/341a246d7745e3e4effbc3951e03113569d525ea1f84d26a8f585a0c74d3f09d?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                  title="Tiết kiệm chi phí"
                  description="Miễn phí cài đặt, triển khai, nâng cấp và hỗ trợ. Rẻ hơn một ly trà đá"
                />
                <Feature
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8ddb07c8bc759ca7e44a2701af4ec585a2bab0a2eca559ced4e30e66088636a9?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                  title="Phù hợp cho từng ngành hàng"
                  description="Phần mềm quản lý bán hàng phù hợp cho hơn 20 ngành nghề kinh doanh khác"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="flex justify-center items-center px-16 w-full text-4xl font-bold text-center text-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex-wrap justify-center content-center p-2.5 max-w-full w-[1000px] max-md:max-w-full">
              Chúng tôi thiết kế phần mềm quản lý bán hàng chuyên biệt cho từng
              ngành hàng
            </div>
          </h2>
          <div className="flex justify-center items-center px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex-wrap gap-y-28 justify-between content-start w-full max-w-[1200px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-between max-md:max-w-full">
                    <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
                      <div className="flex justify-center items-center px-5 bg-gray-100 rounded-3xl h-[90px] w-[90px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a028774dc8b2d9d13f917263405a34b71c08075a70beaa598c2ca843c8f84b18?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          className="w-full aspect-square fill-cyan-400"
                        />
                      </div>
                    </div>
                    <div className="justify-center p-2.5 mt-1 text-xl font-semibold text-center text-slate-50 max-md:max-w-full">
                      Bán buôn, bán lẻ
                    </div>
                    <div className="flex flex-col justify-center px-20 mt-1 text-sm font-semibold text-slate-50 max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-0 justify-between py-2.5 border-t border-solid border-stone-300 max-md:flex-wrap max-md:mr-1.5">
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/929d666fffd58534cb413a908f8edd398677b2169add5de43db3206435ccbebc?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-white w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Thời trang
                          </div>
                        </div>
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0644f0f6ec78298d5ef2d466cdec5eccf04b9947150d0f0a4e6009171cf1ad00?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-white w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Tạp hóa & Siêu thị
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between py-2.5 mt-1 border-t border-solid border-stone-300 max-md:flex-wrap max-md:mr-1.5">
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b6d692684749a117cd04b7641c670126a15f369eba4c202b73fe47c9ec15d81?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-white w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Điên thoại & Điện máy
                          </div>
                        </div>
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22a17ea04bae6635aba6f15c804b0cfdae957b7314c4ba9f56ad336082dbe234?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-white w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Mỹ phẩm
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between py-2.5 mt-1 border-t border-solid border-stone-300 max-md:flex-wrap max-md:mr-1.5">
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/965d2a0fb23941f93ea250e9ab9574bb12e87950f06720c1af8bbbc0ae7e4416?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-slate-50 w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Vật liệu xây dựng
                          </div>
                        </div>
                        <div className="flex flex-1 gap-0 text-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe6df5c12198118efad103ed2597d41c29ace4ea13b9f9b1edd7ef64c6c38391?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5 max-md:pr-5">
                            Nông sản & Thực phẩm
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between py-2.5 mt-1 border-t border-solid border-stone-300 max-md:flex-wrap max-md:mr-1.5">
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c4975592d132dc598edbc5990462a965b9dd3563c9ca812f3a9409d78457080?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-slate-50 w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Nhà thuốc
                          </div>
                        </div>
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10b031a3f101926798877d6f28185eb7eb11db14ffcb790f03d5ae7c0100a863?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Xe, Máy móc
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between py-2.5 mt-1 border-t border-solid border-stone-300 max-md:flex-wrap max-md:mr-1.5">
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/271a306581d61ba69f5fb138e3fea6fae0d04eea534e3b925f596230c057eab5?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-slate-50 w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Mẹ & Bé
                          </div>
                        </div>
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98c8542263849e2f6362ddbac1fbab167334cec2ee047122803efe9fbb0b147?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Nội thất & Gia dụng
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between py-2.5 mt-1 border-t border-solid border-stone-300 max-md:flex-wrap max-md:mr-1.5">
                        <div className="flex flex-1 gap-0 text-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2785de92ad4ad1abcddaf9af25e94be7c870ba52a9659830847e6e84333132d?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-slate-50 w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Sách & Văn phòng phẩm
                          </div>
                        </div>
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf754c5c9afabd42b61a840de888e9bf19b2186513ff4ffa9fe0c2779b338dd?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Hoa & Quà tặng
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between py-2.5 mt-1 border-t border-solid border-stone-300 max-md:flex-wrap max-md:mr-1.5">
                        <div className="flex flex-1 gap-0">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a73667ae56dec9daa6fcfe18a88ae6c3ad86745355ebc2f4223f3735d7f99452?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square fill-slate-50 w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Sản xuất
                          </div>
                        </div>
                        <div className="flex flex-1 gap-0 whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ffcccb2bb74e87b5af53c6ce8360916094710a228dbcbe5dfc6480d5057fc2d?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                            className="shrink-0 my-auto aspect-square w-[25px]"
                          />
                          <div className="flex-1 justify-center p-2.5">
                            Khác
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex-wrap content-start max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-between max-md:mt-6">
                          <div className="flex justify-center items-center px-16 max-md:px-5">
                            <div className="flex justify-center items-center px-5 bg-gray-100 rounded-3xl h-[90px] w-[90px]">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/568047e09def75c06198113a147e889cc0e602995077b79bc318efec09d8c16b?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="w-full aspect-square"
                              />
                            </div>
                          </div>
                          <div className="justify-center items-center p-2.5 mt-4 text-xl font-semibold text-center text-slate-50 max-md:px-5">
                            Ăn uống giải trí
                          </div>
                          <div className="flex flex-col mt-4 text-sm font-semibold text-slate-50">
                            <div className="flex gap-0 py-2.5 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8d5f644a88bbed66d87164692c0380633acb6f1b115cf2d997d627280c60593?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto aspect-square w-[25px]"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Nhà hàng
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/779f5ac672e4f174be79a42ddda6e2f191fff2092101ff8179ff7e0626a3cdda?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto aspect-square w-[25px]"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Quán ăn
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/764a2d20d120a037811886dbc2cadd50c5582057efecf3a06cbb979af6af57c5?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto aspect-square fill-white w-[25px]"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Cafe, Trà sữa
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bf5b5151a9a4adb978ecace5538f8bb66ecd43bfb6490b22574d103fa97e2f8?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto aspect-square fill-zinc-600 w-[25px]"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Karaoke, Bida
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/79ce5bdbbf2a7d6ddc0a9bed03c0613f175c26f586f298330eb77a5b93e28d3e?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto aspect-square fill-zinc-600 w-[25px]"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Bar, Pub & Club
                              </div>
                            </div>
                            <div className="flex gap-0 pt-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ceaa6b49437b7144e7f2d698e0cb279f4a227e7cb593ff1c1def49a1708421d?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 self-start mt-1.5 aspect-[1.19] fill-zinc-600 w-[25px]"
                              />
                              <div className="flex-1 p-2.5">
                                Căng tin & Trạn dừng nghỉ
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-between max-md:mt-6">
                          <div className="flex justify-center items-center px-16 max-md:px-5">
                            <div className="flex justify-center items-center px-5 bg-gray-100 rounded-3xl h-[90px] w-[90px]">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a615f924b6900dc824ad77b9a0c2cd77d6b577df45b2b708df4bedebb8264cd3?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="aspect-[0.5] fill-cyan-400 w-[23px]"
                              />
                            </div>
                          </div>
                          <div className="justify-center p-2.5 mt-4 text-xl font-semibold text-center text-slate-50 max-md:px-6">
                            Lưu trú, làm đẹp
                          </div>
                          <div className="flex flex-col mt-4 text-sm font-semibold text-slate-50">
                            <div className="flex gap-0 py-2.5 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78dfc8790140829f7302114d297669bcc6aa7bb0b63134a0288e85e6296f165a?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto w-6 aspect-square fill-zinc-600"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Beauty Spa & Massage
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0470790031442c9fc51ad439e975bffc549361fb84eed9e4251c9fe402e7c2ac?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto aspect-square fill-zinc-600 w-[25px]"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Hair Salon & Nails
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3718a5d339ddb255f873ff9be106b47451ae3f0f968ef1ddaf5d482ad19646a6?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto w-6 aspect-square fill-zinc-600"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Khách sạn & Nhà nghỉ
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/38d0587aa9c9bf2903b21b2a987545295ef01c832bba89e6041cf4b47269c31e?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto w-6 aspect-square fill-zinc-600"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Homestay & Villa, Resort
                              </div>
                            </div>
                            <div className="flex gap-0 py-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe3c2ca1d0933fc3206d3a8e55a2857c48c2a977dccf4f709e837d7510ff805d?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 my-auto w-6 aspect-square fill-zinc-600"
                              />
                              <div className="flex-1 justify-center p-2.5">
                                Fitness & Yoga
                              </div>
                            </div>
                            <div className="flex gap-0 pt-2.5 mt-1 border-t border-white border-solid">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d14552ade4452fbaafbd16df897e5684665df9bc60ec75f86773b0813e98e7db?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                                className="shrink-0 self-start mt-1.5 aspect-[1.19] fill-zinc-600 w-[25px]"
                              />
                              <div className="flex-1 p-2.5">Phòng khám</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center px-16 mt-16 w-full font-bold text-center max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-2.5 justify-center pl-8 bg-sky-100 rounded-3xl max-md:pl-5">
            <p className="my-auto text-sm text-sky-950">
              10 ngày dùng thử miễn phí
            </p>
            <button className="justify-center px-8 py-4 text-xl bg-blue-600 rounded-3xl text-slate-50 max-md:px-5">
              Đăng ký ngay
            </button>
          </div>
        </section>

        <section className="mt-16 max-md:mt-10 max-md:max-w-full">
          <h2 className="flex-wrap justify-center content-center px-5 w-full text-4xl font-bold text-center text-slate-50 max-md:max-w-full">
            <span className="text-pink-500">WeldingStore</span> - Giải pháp kinh
            doanh toàn diện
          </h2>
          <div className="flex flex-col justify-center px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex-wrap content-center px-20 mx-10 max-w-[1300px] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col p-2.5 mx-auto mt-1.5 w-full rounded-xl bg-slate-900 max-md:mt-10">
                    <div className="flex flex-wrap gap-5 content-end">
                      <div className="flex justify-center items-center self-start mt-1">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62dc94148b7b7840975538f8ad040a8d0ec998758d0c9246d302915a36c0c626?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt="WeldingStore Software"
                          className="w-10 aspect-square"
                        />
                      </div>
                      <div className="flex flex-col flex-1 whitespace-nowrap text-slate-50">
                        <h3 className="justify-center text-xl font-bold">
                          WeldingStore
                        </h3>
                        <p className="justify-center mt-1.5 text-xs font-medium">
                          Software
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-base text-center text-slate-50">
                      Phần mềm quản lý bán hàng phổ biến nhất với 20 + ngành
                      hàng
                    </p>
                    <ul className="mt-5 text-sm font-bold text-slate-50">
                      <li className="flex gap-2.5 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5df6af17263d4b66b5a02a28b1effe4f6309f84a258b077e5e3e6f1c39c91e55?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 aspect-square w-[25px]"
                        />
                        <span className="flex-1 my-auto">
                          Đơn giản quản lý hàng hóa
                        </span>
                      </li>
                      <li className="flex gap-2 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/140a9e39eebe775a6e17cd13de31b8c0ddc99e293cfaaa2754725a355e52f2c8?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 my-auto aspect-square w-[25px]"
                        />
                        <span className="flex-1">
                          Dễ dàng truy cập báo cáo, theo dõi tăng trưởng doanh
                          thu
                        </span>
                      </li>
                      <li className="flex gap-2 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5df6af17263d4b66b5a02a28b1effe4f6309f84a258b077e5e3e6f1c39c91e55?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 aspect-square w-[25px]"
                        />
                        <span className="flex-1 my-auto">
                          Tối ưu quản lý bán hàng đa kênh
                        </span>
                      </li>
                      <li className="flex gap-2 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5df6af17263d4b66b5a02a28b1effe4f6309f84a258b077e5e3e6f1c39c91e55?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 aspect-square w-[25px]"
                        />
                        <span className="flex-1 my-auto">
                          Nâng cao chất lượng vận hành
                        </span>
                      </li>
                    </ul>
                    <button className="justify-center self-center px-6 py-3 mt-5 text-sm font-bold bg-fuchsia-800 rounded-3xl text-slate-50 max-md:px-5">
                      Xem phí dịch vụ
                    </button>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch px-2.5 py-4 m-auto w-full rounded-xl bg-slate-900 max-md:mt-10">
                    <div className="flex flex-wrap gap-5 content-end">
                      <div className="flex justify-center items-center self-start mt-1">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2811a9916629e48c11d34a9743e6168b9d7a6ae4216de52b6b7fd5732d6e5c1?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt="WeldingStore Connect"
                          className="w-10 aspect-square"
                        />
                      </div>
                      <div className="flex flex-col flex-1 whitespace-nowrap text-slate-50">
                        <h3 className="justify-center text-xl font-bold">
                          WeldingStore
                        </h3>
                        <p className="justify-center mt-1.5 text-xs font-medium">
                          Connect
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-base text-center text-slate-50">
                      Sàn kết nối nguồn hàng giá tốt dành cho nhà bán hàng
                    </p>
                    <ul className="mt-6 text-sm font-bold text-slate-50">
                      <li className="flex gap-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d133978325006bee0fdae8776d8dd40ccf54aea8627efcf84e0c56cddd41d8f5?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 aspect-square w-[25px]"
                        />
                        <span className="flex-1 my-auto">
                          40.000+ mặt hàng đa dạng
                        </span>
                      </li>
                      <li className="flex gap-2 mt-6">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb11153bcf9bf7fea38102d26f2ad3808d887b2a0799cd9ec4097e28bfeb4295?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 my-auto aspect-square w-[25px]"
                        />
                        <span className="flex-1">
                          Nguồn hàng giá tốt từ 1.000+ nhà bán sỉ trên toàn quốc
                        </span>
                      </li>
                      <li className="flex gap-2 mt-6">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d133978325006bee0fdae8776d8dd40ccf54aea8627efcf84e0c56cddd41d8f5?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 aspect-square w-[25px]"
                        />
                        <span className="flex-1">
                          Có ngay khách hàng tiềm năng khi lên sàn giúp tăng
                          trưởng doanh số
                        </span>
                      </li>
                    </ul>
                    <button className="justify-center self-center px-6 py-3 mt-6 text-sm font-bold bg-fuchsia-800 rounded-3xl text-slate-50 max-md:px-5">
                      Tìm hiểu thêm
                    </button>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-2.5 py-4 mx-auto w-full rounded-xl bg-slate-900 max-md:mt-10">
                    <div className="flex flex-wrap gap-5 content-end">
                      <div className="flex justify-center items-center self-start mt-1">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf22357eed5aada30e77b7d6bf82567ef32fd33b4e282042e8d125ffd3cb7235?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt="WeldingStore Finance"
                          className="w-10 aspect-square"
                        />
                      </div>
                      <div className="flex flex-col flex-1 whitespace-nowrap text-slate-50">
                        <h3 className="justify-center text-xl font-bold">
                          WeldingStore
                        </h3>
                        <p className="justify-center mt-1.5 text-xs font-medium">
                          Finance
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-base text-center text-slate-50">
                      Giải pháp thanh toán - Vay vốn uy tín dành cho chủ shop
                    </p>
                    <ul className="mt-5 text-sm font-bold text-slate-50">
                      <li className="flex gap-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b369e7876e19460337bf69d9e72225f5328cfb7e748057a6d4addccea1332d77?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 aspect-square w-[25px]"
                        />
                        <span className="flex-1 my-auto">
                          Tích hợp thanh toán QR
                        </span>
                      </li>
                      <li className="flex gap-2 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f90702ab35e4dadad2d7a1c3d32adc85df89f5e997071e5f5fb66b30508a37?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                          alt=""
                          className="shrink-0 my-auto aspect-square w-[25px]"
                        />
                        <span className="flex-1">
                          Hỗ trợ vay vốn từ các đối tác tài chính uy tín (KBank,
                          Easy Credit...)
                        </span>
                      </li>
                    </ul>
                    <button className="justify-center self-center px-6 py-3 mt-28 text-sm font-bold bg-fuchsia-800 rounded-3xl text-slate-50 max-md:px-5 max-md:mt-10">
                      Liên hệ tư vấn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center px-16 mt-16 w-full text-center text-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-w-[1100px] max-md:max-w-full">
            <p className="text-base max-md:max-w-full">
              Quy trình phát triển phần mềm nghiêm ngặt đảm bảo an toàn dữ liệu
              khách hàng
            </p>
            <p className="mt-5 text-sm font-bold max-md:max-w-full">
              Có đội ngũ chuyên gia kiểm soát chặt chẽ các vấn đề liên quan đến
              an toàn thông tin. Các thông tin định danh được mã hóa bảo mật
              nhiều lớp nhằm bảo vệ dữ liệu của khách hàng, hạn chế tối đa rủi
              ro lộ thông tin
            </p>
          </div>
        </section>

        <section className="flex justify-center items-center px-16 mt-16 w-full text-2xl font-bold text-center text-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="flex-wrap justify-center content-center max-md:max-w-full">
            Hãy để WeldingStore đồng hành kinh doanh với bạn
          </h2>
        </section>

        <section className="flex justify-center items-center px-16 mt-16 w-full text-2xl font-bold text-center text-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <button className="justify-center px-6 py-4 bg-blue-600 rounded-2xl max-md:px-5">
            Dùng thử miễn phí
          </button>
        </section>

        <section className="flex justify-center items-center px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex-wrap justify-center content-center w-full max-w-[1100px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <SupportChannel
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/52b15e2d77e07d43d5e78513f3577112a04303cb3a8d1dd54344e13385af4159?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                  title="Hotline"
                  description={
                    <>
                      Tư vấn bán hàng: 1900 9525
                      <br />
                      Chăm sóc khách hàng: 1900 9525
                      <br />
                      Hoạt động 365 ngày/năm từ 7:00 đến 22:00 kể cả ngày nghỉ
                      lễ, tết.
                    </>
                  }
                />
                <SupportChannel
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/66323b7139486636570663ad4989d24f4ccaa5bfdabfe67c75b09e04bb5eec6d?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                  title="WeldingStore Fanpage"
                  description="Luôn trả lời các thông tin nhanh nhất thông qua các phản hồi trên facebook"
                />
                <SupportChannel
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/be3453170ddcc2fc653bdec9ede6cce1b1200aaad83e4c721cca436a54790b9d?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                  title="Kênh hỗ trợ Youtube"
                  description="Luôn cập nhập các kiến thức sử dụng phần mềm tức thời, trực quan giúp người dùng sử dụng được WeldingStore dễ dàng và hiệu quả nhất."
                />
                <SupportChannel
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba4420f28bd7649ee4b7201233cb4791af6b4a59cf22c2cbf7225d4ca761aa0?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                  title="Chat trên web & mobile"
                  description="Luôn có người trực chat để trả lời câu hỏi của các bạn nhanh và hiệu quả nhất suốt 365 ngày/năm"
                />
              </div>
            </div>
          </section>
      </main>

      <footer className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-16 w-full min-h-[587px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fe454d901b26c4ee0bac5b3f0f055fadf%2Fee2ff5d9a69f4cf9893c537a0755aed6"
          alt="Footer background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative justify-center mt-14 mb-5 max-w-full w-[930px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow self-stretch pb-20 max-md:mt-10">
                <div className="flex flex-col justify-center items-start max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/864d8ada2612ade9b9f332872bf8115b9bf5bb3c9e6157cc7838dafe001c555b?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
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
              <nav className="flex relative flex-col grow self-stretch pb-20 text-base text-slate-50 max-md:mt-10">
                <h3 className="justify-center text-xl font-bold">
                  Quick links
                </h3>
                <ul>
                  <li className="mt-5">
                    <a href="#">Web page</a>
                  </li>
                  <li className="mt-5">
                    <a href="#">Online shop</a>
                  </li>
                  <li className="mt-5">
                    <a href="#">SEO optimization</a>
                  </li>
                  <li className="mt-5">
                    <a href="#">Counseling</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow self-stretch max-md:mt-10">
                <div className="flex flex-col text-slate-50">
                  <h3 className="justify-center text-xl font-bold">
                    Download online sales trends for 2024
                  </h3>
                  <p className="justify-center mt-3.5 text-base">
                    Enter your email and we will send you our detailed support
                    of the Welding Store market.
                  </p>
                </div>
                <form className="flex flex-col pb-16 mt-5">
                  <label htmlFor="emailInput" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="emailInput"
                    type="email"
                    placeholder="Email Address"
                    className="justify-center py-2.5 pr-5 pl-4 text-sm font-bold bg-fuchsia-800 rounded-xl text-slate-50 max-md:pl-5"
                    aria-label="Email Address"
                  />
                  <button
                    type="submit"
                    className="flex gap-2.5 justify-center self-end py-2.5 pr-2.5 pl-3.5 mt-5 bg-pink-500 rounded-xl"
                  >
                    <span className="flex-1 justify-center text-sm font-bold text-center text-slate-50">
                      Send
                    </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c468c0cdbb26d7d78e34e3e3f3864fbf0e9a34342a648d0a4d2b602dd3fcc5eb?apiKey=e454d901b26c4ee0bac5b3f0f055fadf&"
                      alt=""
                      className="w-5 aspect-square"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IpadHomePageComponent;
