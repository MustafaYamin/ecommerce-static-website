import Image from "next/image";

export default function TopSelling() {
  return (
    <div className="flex md:mt-5 gap-11 justify-center flex-col items-center">
      <h2 className="font-extrabold lg:text-[48px] text-[32px] leading-[38px] xl:leading-[57.6px] ">
        TOP SELLING
      </h2>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:gap-6 md:gap-3 gap-[2px]">
          <div className="relative  rounded-[13.42px] ">
            <Image
              className="md:w-[290px] md:h-[290px] lg:w-[270px] lg:h-[298px] rounded-[13.42px]"
              src="/images/vertical-striped-shirt.png"
              alt="New arrived black t-shitr"
              width={180}
              height={290}
            />

            <p className="w-[170px] h-[22px] md:text-lg md:w-[210px] font-bold text-[14px] mt-2 leading-[15px] ">
              Vertical Striped Shirt
            </p>
            <div className="w-[127px] md:mt-3 h-[16px] items-center gap-[23px] flex">
              <div className="flex gap-[3px]">
                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={14}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={14}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={14}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={14}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={14}
                  height={15}
                />
              </div>
              <p className="flex ">
                5.0/ <span className="text-[#00000092]">5</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-bold text-[20px] py-2 leading-5">$212</p>
              <p className="font-bold text-[20px] text-[#37373798] line-through py-2 leading-5">
                $232
              </p>
              <span className="py-[4px] font-bold px-[10px] bg-[#ff33334d] text-[#FF3333] rounded-3xl text-[10px] leading-[14px]">
                -20%
              </span>
            </div>
          </div>

          <div className="relative  rounded-[13.42px] ">
            <Image
              className=" md:w-[290px] md:h-[290px] lg:w-[270px] lg:h-[298px] rounded-[13.42px]"
              src="/images/cgt.png"
              alt="New arrived black t-shitr"
              width={180}
              height={290}
            />

            <p className="w-[170px] h-[22px] md:text-lg md:w-[210px] font-bold text-[14px] mt-2 leading-[15px] ">
              Courage Graphic T-shirt
            </p>
            <div className="w-[127px] md:mt-3 h-[16px] items-center gap-[20px] flex">
              <div className="flex gap-[5px]">
                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />
              </div>
              <p className="flex">
                4.0/ <span className="text-[#00000092]">5</span>
              </p>
            </div>
            <p className="font-bold text-[20px] py-2 leading-5">$145</p>
          </div>

          <div className="relative hidden md:inline  rounded-[13.42px] ">
            <Image
              className=" md:w-[290px] md:h-[290px] lg:w-[270px] lg:h-[298px] rounded-[13.42px]"
              src="/images/loose-shorts.png"
              alt="New arrived black t-shitr"
              width={180}
              height={290}
            />

            <p className="w-[170px] h-[22px] md:text-lg md:w-[250px] font-bold text-[14px] mt-2 leading-[15px] ">
              Loose Fit Barmooda Shorts
            </p>
            <div className="w-[127px] md:mt-3 h-[16px] items-center gap-[20px] flex">
              <div className="flex gap-[5px]">
                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />
              </div>
              <p className="flex">
                3.0/ <span className="text-[#00000092]">5</span>
              </p>
            </div>
            <p className="font-bold text-[20px] py-2 leading-5">$80</p>
          </div>

          <div className="  relative hidden md:inline  rounded-[13.42px] ">
            <Image
              className=" md:w-[290px] md:h-[290px] lg:w-[270px] lg:h-[298px] rounded-[13.42px] "
              src="/images/faded-jeans.png"
              alt="New arrived black t-shitr"
              width={180}
              height={290}
            />

            <p className="w-[170px] h-[22px] md:text-lg md:w-[210px] font-bold text-[14px] mt-2 leading-[15px] ">
              Faded Skinny Jeans
            </p>
            <div className="w-[127px] md:mt-3 h-[16px] items-center gap-[20px] flex">
              <div className="flex gap-[5px]">
                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/star.png"
                  alt="rating star"
                  width={15}
                  height={15}
                />

                <Image
                  src="/icons/half-star.png"
                  alt="rating star"
                  width={7}
                  height={13}
                />
              </div>
              <p className="flex ">
                4.5/ <span className="text-[#00000092]">5</span>
              </p>
            </div>
            <p className="font-bold text-[20px] py-2 leading-5">$120</p>
          </div>
        </div>
      </div>

      <button className="border-[1px] border-[#27272788] lg:w-[218px] active:text-gray-400 text-center self-center w-[80%] rounded-3xl h-[46px]   px-[54px] py-[13px]  ">
        View all
      </button>
    </div>
  );
}
