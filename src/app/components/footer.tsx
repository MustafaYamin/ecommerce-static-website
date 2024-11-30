import Image from "next/image";
import Logo from "./header/logo";
import FooterContent from "./props/footerprp";

export default function Footer() {
  return (
    <>
      <div className=" flex  justify-center h-[146px] lg:h-[189px] bg-[#00000033] mt-56 md:mt-40 overflow-visible">
        <div className=" bg-black h-[368px] xl:w-[1100px] lg:w-[950px] flex flex-col  md:w-[690px] w-[90vw] md:h-[200px] md:grid md:grid-cols-2 lg:px-[64px] lg:py-[36px] md:justify-between rounded-[20px] relative bottom-52 md:bottom-20 lg:bottom-20 md:items-center md:px-7">
          <div className="text-white md:w-[295px] h-[105px] lg:w-[500px] mt-10 ml-6 md:ml-0 xl:w-[551px] lg:h-[94px] font-bold lg:text-[40px] lg:font-extrabold lg:leading-[45px] text-[32px] md:mt-8 lg:mt-0 leading-[35px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="flex flex-col gap-5 items-center pt-14 md:pt-0 md:items-end">
            <div className="bg-[#FFFFFF] flex items-center justify-center md:justify-normal gap-3 lg:w-[349px] md:w-[279px] w-[250px] lg:h-[48px] h-[30px] rounded-[62px] lg:py-3 lg:px-1">
              <Image
                className="md:ml-3"
                src="/Icons/e-mail.png"
                alt="email icon"
                height={15}
                width={20}
              />
              <input
                className="lg:text-[16px] w-[177px] lg:leading-[21px]"
                type="text"
                placeholder="Enter your email address"
              />
            </div>

            <div className="bg-[#FFFFFF] overflow-visible flex items-center justify-center  gap-3 lg:w-[349px] md:w-[279px] w-[250px] lg:h-[48px] h-[30px] rounded-[62px] lg:py-3 lg:px-1">
              <button className="md:font-medium lg:text-[16px]   lg:leading-[21px]">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:h-[300px] md:h-[400px] bg-[#00000033] pt-7">
        <div className="flex  flex-col  lg:grid lg:grid-cols-5 lg:justify-center lg:h-[177px]   lg:w-[100svw] md:w-[690px] w-[90vw]   ">
          <div className="pl-2  lg:pl-6 lg:w-[248px]">
            <Logo />
            <p className="text-[14px] md:text-[17px] flex flex-wrap overflow-hidden w-[310px] lg:w-[190px] leading-[20px] md:leading-[25px] mt-3 text-[#00000099]">
              {" "}
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 mt-3 w-[148px] h-[28px]">
              <div className="rounded-full overflow-hidden flex items-center justify-center bg-white w-[28px] md:w-[32px] h-[28px] md:h-[31px] border-[1px] border-solid border-[#00000033]">
                <Image
                  className="md:w-[13px]"
                  src="/icons/twitter.png"
                  alt="tritter icon"
                  width={12}
                  height={9}
                />
              </div>
              <div className="rounded-full flex items-center justify-center bg-black w-[28px] md:w-[32px] h-[28px] md:h-[31px]">
                <Image
                  className="md:w-[9px]"
                  src="/icons/facebook.png"
                  alt="tritter icon"
                  width={6}
                  height={9}
                />
              </div>
              <div className="rounded-full flex items-center justify-center bg-white w-[28px] md:w-[32px] h-[28px] md:h-[31px] border-[1px] border-solid border-[#00000033]">
                <Image
                  className="md:w-[13px]"
                  src="/icons/insta.png"
                  alt="tritter icon"
                  width={12}
                  height={9}
                />
              </div>
              <div className="rounded-full flex items-center justify-center bg-white w-[28px] md:w-[32px] h-[28px] md:h-[31px] border-[1px] border-solid border-[#00000033]">
                <Image
                  className="md:w-[13px] md:h-[15px]"
                  src="/icons/github.png"
                  alt="tritter icon"
                  width={12}
                  height={9}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6 relative lg:-top-11 overflow-hidden items-end justify-center pl-8 lg:pl-11 lg:w-[80svw]  w-[100svw]">
            <FooterContent
              heading="Company"
              cont1="About"
              cont2="Fratures"
              cont3="Works"
              cont4="Career"
            />
            <FooterContent
              heading="Help"
              cont1="Customer Support"
              cont2="Delivery Details"
              cont3="Terms & Conditions"
              cont4="Privacy Policy"
            />
            <FooterContent
              heading="FAQ"
              cont1="Account"
              cont2="Manage Deliveries"
              cont3="Orders"
              cont4="Payments"
            />
            <FooterContent
              heading="Resources"
              cont1="Free eBooks"
              cont2="Development Tutorials"
              cont3="How to - Blog"
              cont4="Youtube Playlist"
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#00000033] flex flex-col justify-center  h-44   w-[100vw]   ">
        <div className="w-[90svw] self-center h-[2px] bg-[#0000001A]"></div>
        <div className="flex flex-col items-center gap-3 justify-center lg:flex-row w-[100svw] mt-5 lg:gap-96 xl:gap-[800px] lg:justify-center ">
          <div className="text-[14px] leading-[18px] text-[#00000099]">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="w-[281px]  h-[30px] gap-[12px] flex justify-evenly">

            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]" >
              <Image src="/Images/visa.png" alt="visa card option" width={32} height={10}  />
            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]" >
              <Image src="/Images/mastercard.png" alt="Mastercard option" width={32} height={10}  />
            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]" >
              <Image src="/Images/paypal.png" alt="Paypal option" width={32} height={10}  />
            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]" >
              <Image src="/Images/apple-pay.png" alt="Apple Pay option" width={32} height={10}  />
            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]" >
              <Image src="/Images/gpay.png" alt="G Pay option" width={32} height={10}  />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
