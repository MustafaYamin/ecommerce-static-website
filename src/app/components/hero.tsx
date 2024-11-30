import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full md:items-center md:flex md:justify-evenly xl:h-[650px] lg:h-[490px] md:h-[385px] h-[880px] px-1 bg-[#F2F0F1]">
      <div className="flex lg:pl-[5px] md:gap-3px  lg:gap-9 gap-5 flex-col justify-center">
        <h1 className="w-[315px] pt-4  h-[93px] text-4xl font-[1000] lg:w-[577px] xl:h-[173px] lg:h-[150px] xl:font-[2000] lg:font-[1500] xl:text-[64px] lg:text-[50px] xl:leading-[64px] lg:leading-[50px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="mt-12 lg:mt-[6px] text-[#00000083] lg:leading-[22px] lg:text-[16px] lg:w-[545px] lg:h-[33px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="text-white sm:w-[360px]  text-[16px] active:bg-gray-400 font-medium self-center flex justify-center bg-black w-[310px] h-[52px] rounded-[62px] py-4 px-[54px] md:self-start">
          Shop Now
        </button>
        <div className="relative  md:justify-start flex justify-center items-center">
          <div>
            <h1 className="text-black  font-bold w-[100px]">200 +</h1>
            <p className="text-[#00000083]  w-[120px] text-[12px]">
              International Brands
            </p>
          </div>
          <div className="  border-l-2 pl-[30px] border-solid border-[#424040a9]">
            <h1 className="text-black font-bold w-[100px]">2,000 +</h1>
            <p className="text-[#00000083]  w-[120px] text-[12px]">
              High-Quality Products
            </p>
          </div>

          <div className="  border-l-2 pl-[30px] hidden md:inline  ml-3 border-solid border-[#424040a9]">
            <h1 className="text-black font-bold w-[100px]">30,000 +</h1>
            <p className="text-[#00000083]  w-[120px] text-[12px]">
              High-Quality Products
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center md:hidden ">
          <div>
            <h1 className="text-black  font-bold ">30,000 +</h1>
            <p className="text-[#00000083]  inline text-[12px]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      <div className="relative top-[-90px] md:top-[-25px] lg:top-[-90px] ">
        <Image
          className="relative lg:left-[0px]  lg:top-[350px] left-7 top-52 lg:w-[80px] xl:top-[431px]"
          src="/images/hero-star.png"
          alt="decoration stars"
          width={44}
          height={44}
        />

        <Image
          className="relative left-60 top-16 md:left-[190px] md:top-[74px] xl:w-[130px] lg:w-[90px] lg:left-[300px] lg:top-[110px] xl:left-[440px] xl:top-[210px]"
          src="/images/hero-star.png"
          alt="decoration stars"
          width={70}
          height={76}
        />

        <Image
          className="lg:w-[571px] md:w-[600px] "
          src="/images/hero-img.jpeg"
          alt="Hero section fashion image"
          width={390}
          height={200}
        />
      </div>
    </div>
  );
}
