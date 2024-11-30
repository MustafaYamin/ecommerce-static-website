import Image from "next/image";

export default function Brands() {
    return (
        <div className="lg:h-[122px] h-fit lg:gap-8 py-5 relative -top-16 md:top-2 lg:top-0  bg-black flex-wrap gap-16 justify-center flex lg:justify-around items-center">

<Image 
  src="/images/versace.png"
  alt="versace logo"
  width={166}
  height={33}
/>
<Image 
  src="/images/zara.png"
  alt="zara logo"
  width={91}
  height={38}
/>
<Image 
  src="/images/gucci.png"
  alt="gucci logo"
  width={156}
  height={32}
/>
<Image 
  src="/images/prada.png"
  alt="prada logo"
  width={194}
  height={31}
/>
<Image 
  src="/images/ck.png"
  alt="calvin klein logo"
  width={206}
  height={33}
/>

    </div>
    );
}