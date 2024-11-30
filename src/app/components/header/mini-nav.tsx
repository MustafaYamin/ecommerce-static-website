import Image from "next/image";

export default function MiniNav() {
  return (
    <div className="xl:h-[40px]  flex items-center justify-center bg-black">
      <p className="xl:w-[400px] xl:h-[19px] xl:text-sm text-[0.50rem] md:text-xs p-1  text-white">
        Sign up and get 20% off to your first order.{" "}
        <span className="xl:font-medium cursor-pointer  underline md:cursor-pointer  sm:inline active:text-yellow-400">
          Sign Up Now
        </span>{" "}
      </p>
      <div className="xl:w-5 sm:inline xl:h-5 xl:pt-1 hidden relative sm:left-11 lg:left-60 md:left-24 xl:left-80">
        <Image
          src="/images/mini-nav-crs.png"
          alt="cancle icon"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
}
