import Logo from "./logo";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="h-12 md:gap-9  sm:justify-evenly flex  justify-evenly w-full md:w-full items-center my-3 lg:my-6 lg:w-svw xl:w-fit lg:gap-10 ">
          <div className="gap-2 flex items-center">
            <Image
              className="sm:hidden relative right-5"
              src="/icons/sidebar.png"
              alt="sidebar"
              width={18}
              height={14}
            />

            <Logo />
          </div>
          <ul className="hidden lg:flex justify-center items-center lg:gap-4">
            <li className="xl:h-[22px] cursor-pointer xl:text-base xl:leading-[22.16px] active:text-slate-600 flex items-center ">
              Shop{" "}
              <div className="inline pl-2 ">
                {" "}
                <Image src="/icons/shop.png" alt="" width={10} height={5} />
              </div>
            </li>
            <li className="xl:h-[22px] cursor-pointer xl:text-base xl:leading-[22.16px] active:text-slate-600 ">
              On Sale
            </li>
            <li className="xl:h-[22px] cursor-pointer xl:text-base xl:leading-[22.16px] active:text-slate-600 ">
              New Arrivals
            </li>
            <li className="xl:h-[22px] cursor-pointer	 xl:text-base xl:leading-[22.16px] active:text-slate-600 ">
              Brands
            </li>
          </ul>

          <div className="sm:flex sm:w-96 justify-start items-center hidden gap-2 px-3 bg-[#F0F0F0] xl:w-[577px] xl:h-8 rounded-[62px]">
            <Image
              src="/icons/search-icon.png"
              alt="search icon"
              width={15}
              height={10}
            />
            <input
              className="bg-[#F0F0F0]  xl:w-[560px] "
              type="text"
              placeholder="search for anything..."
            />
          </div>

          <div className="lg:w-[62px] gap-1 md:w-auto flex lg:h-6 md:gap-2 lg:gap-[14px]">
            <Image
              className="sm:hidden cursor-pointer	"
              src="/icons/sm-search.png"
              alt="search"
              height={20}
              width={22}
            />

            <Image
              className="cursor-pointer	"
              src="/icons/cart.png"
              alt="add to cart"
              height={20}
              width={22}
            />
            <Image
              className="cursor-pointer	"
              src="/icons/account.png"
              alt="your account"
              height={20}
              width={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
