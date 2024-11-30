import Image from "next/image";

export default function BBDS() {
  return (
    <div className=" flex  w-[100vw] justify-center my-20 self-center ">
      <div className="rounded-[20px] lg:rounded-[40px] w-[90%] flex-col  items-center lg:h-[866px] h-[975px] flex bg-[#F0F0F0]">
        <h1 className="lg:mt-[70px] mt-[40px] font-extrabold lg:text-5xl lg:leading-57px text-center text-[32px] leading-[36px] ">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-none lg:mt-16 items-center lg:relative lg:right-3 xl:right-0  mt-4 justify-center w-[80%] gap-5 ">
          <div className="  lg:h-[289px] h-[190px] md:h-[200px] w-[310px] md:w-[430px] flex lg:w-[370px] xl:w-[430px] rounded-[20px] bg-white ">
            <p className="md:text-[36px] md:leading-[48px] pt-4 pl-6 text-[24px] leading-[32px] font-bold md:pt-6 md:pl-9">
              Casual
            </p>
            <Image
              className=" rounded-[20px] overflow-hidden "
              src="/images/casual.png"
              alt="casual outfits section"
              width={700}
              height={472}
            />
          </div>
          <div className=" lg:h-[289px] h-[190px] md:h-[200px] w-[310px] md:w-[430px] lg:w-[370px] flex xl:w-[620px] xl:relative xl:right-[110px]  rounded-[20px] bg-white ">
            <p className="md:text-[36px] md:leading-[48px] pt-4 pl-6 text-[24px] leading-[32px] font-bold md:pt-6 md:pl-9">
              Formal
            </p>
            <Image
              className="overflow-hidden rounded-[20px]"
              src="/images/formal.png"
              alt="formal outfits section"
              width={600}
              height={400}
            />
          </div>
          <div className=" lg:h-[289px] h-[190px] md:h-[200px] w-[310px] md:w-[430px] lg:w-[370px]  flex xl:w-[620px]  rounded-[20px] bg-white ">
            <p className="md:text-[36px] md:leading-[48px] pt-4 pl-6 text-[24px] leading-[32px] font-bold md:pt-6 md:pl-9">
              Party
            </p>
            <Image
              className="overflow-hidden rounded-[20px] lg:w-[450px] xl:w-[500px] "
              src="/images/party.png"
              alt="party outfits section"
              width={380}
              height={300}
            />
          </div>
          <div className=" lg:h-[289px] h-[190px] md:h-[200px] w-[310px] md:w-[430px] lg:w-[370px] xl:w-[430px] flex xl:relative xl:-right-[83px]  rounded-[20px] bg-white ">
            <p className="md:text-[36px] md:leading-[48px] pt-4 pl-6 text-[24px] leading-[32px] font-bold md:pt-6 md:pl-9">
              Gym
            </p>
            <Image
              className="rounded-[20px] lg:w-[250px] lg:h-[289px] xl:w-[310px] "
              src="/images/gym.png"
              alt="gym outfits section"
              width={502}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
