import Image from "next/image";

export default function Reviews() {
  return (
    <div className="md:mx-24  h-[400px] gap-6">
      <h1 className="font-extrabold text-[32px] leading-[36px] pl-3 md:pl-0 md:text-[48px] md:leading-[57px]">
        OUR HAPPY CUSTOMERS
      </h1>
      <div className="flex justify-evenly md:gap-5 mt-10 ">
        <div className="w-[358px] md:w-[400px] h-[239px]  rounded-[20px] p-6 md:px-[32px] md:py-[28px] border-[#0000003e] border-[1px]">
          <div className="md:gap-4 gap-3">
            <div className="md:gap-[6px] flex gap-[5.41px]">
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
                src="/icons/star.png"
                alt="rating star"
                width={15}
                height={15}
              />
            </div>
          </div>

          <div className="flex items-center gap-[4px] md:text-[20px] md:pt-3 pt-6 lg:pt-6 text-[16px] font-bold leading-[22px]">
            Sarah M.
            <Image
              className="md:w-[19px] md:h-[19px]"
              src="/icons/green-tick.png"
              alt="green tick on review"
              width={15}
              height={15}
            />
          </div>

          <p className="md:text-[16px] md:leading-[22px] text-[14px] leading-[20px] md:pt-[10px] pt-6 lg:pt-6 text-[#000000ad]">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="w-[400px] h-[239px] rounded-[20px] p-6 border-[#0000003e] border-[1px] hidden md:inline ">
          <div className="md:gap-4 gap-3">
            <div className="md:gap-[6px] flex gap-[5.41px]">
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
                src="/icons/star.png"
                alt="rating star"
                width={15}
                height={15}
              />
            </div>
          </div>

          <div className="flex items-center gap-[4px] md:text-[20px] md:pt-3 pt-6 lg:pt-6 text-[16px] font-bold leading-[22px]">
            Alex K.
            <Image
              className="md:w-[19px] md:h-[19px]"
              src="/icons/green-tick.png"
              alt="green tick on review"
              width={15}
              height={15}
            />
          </div>

          <p className="md:text-[16px] md:leading-[22px] text-[14px] leading-[20px] md:pt-[10px] pt-6 lg:pt-6 text-[#000000ad]">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className="w-[400px] h-[239px] rounded-[20px] p-6 border-[#0000003e] border-[1px] hidden xl:inline">
          <div className="md:gap-4 gap-3">
            <div className="md:gap-[6px] flex gap-[5.41px]">
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
                src="/icons/star.png"
                alt="rating star"
                width={15}
                height={15}
              />
            </div>
          </div>

          <div className="flex items-center gap-[4px] md:text-[20px] md:pt-3 pt-6 lg:pt-6 text-[16px] font-bold leading-[22px]">
            James L.
            <Image
              className="md:w-[19px] md:h-[19px]"
              src="/icons/green-tick.png"
              alt="green tick on review"
              width={15}
              height={15}
            />
          </div>

          <p className="md:text-[16px] md:leading-[22px] text-[14px] leading-[20px] md:pt-[10px] pt-6 lg:pt-6 text-[#000000ad]">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  );
}
