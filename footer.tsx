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
            <svg className="md:ml-3" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z" fill="black" fill-opacity="0.4"/>
</svg>

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
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Visa-Logo--Streamline-Logos" height="32" width="42"><desc>Visa Logo Streamline Icon: https://streamlinehq.com</desc><path fill="#1434cb" fill-rule="evenodd" d="M1 8.5h2.698a1 1 0 0 1 0.976 0.783L5.5 13 7 8.5h2l-2.5 7h-2L3 9.5l-2 -1Zm9 0h1.5l-1 7H9l1 -7Zm5.003 0c0.8 0 1.62 0.124 1.954 0.291l-0.236 1.426c-0.303 -0.165 -0.99 -0.31 -1.648 -0.31 -0.658 0 -0.846 0.415 -0.846 0.595 0 0.247 0.333 0.424 0.756 0.648 0.734 0.39 1.738 0.923 1.738 2.217 0 1.502 -1.902 2.133 -2.903 2.133 -0.8 0 -1.778 -0.124 -2.112 -0.291l0.235 -1.426c0.299 0.103 1.123 0.333 1.781 0.333 0.66 0 1.147 -0.333 1.147 -0.618 0 -0.426 -0.422 -0.646 -0.915 -0.903 -0.694 -0.362 -1.529 -0.797 -1.529 -1.985 0 -1.502 1.577 -2.11 2.578 -2.11Zm1.497 7h2l0.343 -1h2.29l0.223 1H23l-1.5 -7h-2l-3 7Zm4.311 -2.502h-1.48l0.936 -2.527 0.544 2.527Z" clip-rule="evenodd" stroke-width="1"></path></svg>
            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]">
            <svg width="32" height="32" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2699 1.84839H9.40663V14.1819H16.2699V1.84839Z" fill="#FF5F00"/>
<path d="M9.84245 8.01514C9.84137 6.82733 10.1105 5.65484 10.6296 4.58644C11.1486 3.51804 11.9039 2.58173 12.8383 1.84838C11.6812 0.938865 10.2915 0.37325 8.82815 0.216185C7.36478 0.0591194 5.88674 0.316937 4.56296 0.96018C3.23919 1.60342 2.1231 2.60614 1.34226 3.8537C0.561418 5.10127 0.147339 6.54336 0.147339 8.01514C0.147339 9.48692 0.561418 10.929 1.34226 12.1766C2.1231 13.4241 3.23919 14.4269 4.56296 15.0701C5.88674 15.7133 7.36478 15.9712 8.82815 15.8141C10.2915 15.657 11.6812 15.0914 12.8383 14.1819C11.9039 13.4485 11.1486 12.5122 10.6296 11.4438C10.1105 10.3754 9.84138 9.20294 9.84245 8.01514Z" fill="#EB001B"/>
<path d="M25.5289 8.01514C25.5289 9.48689 25.1149 10.929 24.3341 12.1765C23.5533 13.4241 22.4372 14.4268 21.1135 15.0701C19.7897 15.7133 18.3117 15.9712 16.8484 15.8141C15.385 15.657 13.9954 15.0914 12.8383 14.1819C13.7719 13.4478 14.5266 12.5113 15.0455 11.4431C15.5645 10.3749 15.8341 9.20275 15.8341 8.01514C15.8341 6.82752 15.5645 5.6554 15.0455 4.58717C14.5266 3.51893 13.7719 2.58247 12.8383 1.84838C13.9954 0.938864 15.385 0.373246 16.8484 0.216183C18.3117 0.0591193 19.7897 0.316948 21.1135 0.960198C22.4372 1.60345 23.5533 2.60616 24.3341 3.85373C25.1149 5.1013 25.5289 6.54338 25.5289 8.01514Z" fill="#F79E1B"/>
<path d="M24.7805 12.8756V12.6231H24.8824V12.5716H24.6231V12.6231H24.7249V12.8756H24.7805ZM25.284 12.8756V12.5711H25.2045L25.1131 12.7805L25.0216 12.5711H24.9421V12.8756H24.9982V12.6459L25.0839 12.8439H25.1421L25.2279 12.6454V12.8756H25.284Z" fill="#F79E1B"/>
</svg>

            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]">
            <svg width="36" height="32" viewBox="0 0 35 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.42569 0.645996H1.7382C1.55429 0.645996 1.39788 0.779641 1.3692 0.961111L0.282238 7.85185C0.260634 7.98786 0.365947 8.11042 0.503883 8.11042H1.78692C1.97083 8.11042 2.12724 7.97677 2.15592 7.79494L2.44908 5.93642C2.47736 5.75441 2.63416 5.62094 2.81768 5.62094H3.66845C5.4388 5.62094 6.46045 4.76433 6.72742 3.06692C6.84762 2.32431 6.73251 1.74081 6.38462 1.33205C6.00273 0.883467 5.32514 0.645996 4.42569 0.645996ZM4.73575 3.16274C4.58881 4.127 3.85198 4.127 3.13953 4.127H2.73398L3.01849 2.32613C3.03538 2.21739 3.12969 2.13721 3.23973 2.13721H3.4256C3.91092 2.13721 4.36877 2.13721 4.60536 2.41377C4.7463 2.57888 4.78958 2.82399 4.73575 3.16274ZM12.4593 3.13183H11.1723C11.0626 3.13183 10.9679 3.21202 10.951 3.32094L10.8941 3.68079L10.804 3.55041C10.5254 3.14601 9.90422 3.01091 9.2841 3.01091C7.86182 3.01091 6.64722 4.08791 6.41063 5.59876C6.28769 6.35227 6.46246 7.07288 6.88999 7.57546C7.28225 8.0375 7.84345 8.23006 8.51104 8.23006C9.6569 8.23006 10.2925 7.49327 10.2925 7.49327L10.235 7.85094C10.2134 7.98768 10.3187 8.11023 10.4558 8.11023H11.6151C11.7995 8.11023 11.955 7.97659 11.9841 7.79475L12.6797 3.3904C12.7017 3.25493 12.5968 3.13183 12.4593 3.13183ZM10.6653 5.63639C10.5411 6.37154 9.95751 6.86504 9.21336 6.86504C8.83965 6.86504 8.54086 6.74521 8.34919 6.51811C8.15897 6.29263 8.08659 5.97152 8.14715 5.61403C8.26317 4.88507 8.85656 4.37557 9.58944 4.37557C9.95478 4.37557 10.2519 4.49685 10.4476 4.72596C10.6436 4.95743 10.7215 5.28037 10.6653 5.63639ZM18.0202 3.13165H19.3135C19.4947 3.13165 19.6003 3.33476 19.4974 3.48332L15.196 9.69145C15.1263 9.792 15.0116 9.85183 14.889 9.85183H13.5973C13.4155 9.85183 13.3093 9.64708 13.4146 9.49816L14.7539 7.60783L13.3294 3.42785C13.2802 3.28257 13.3875 3.13165 13.542 3.13165H14.8128C14.978 3.13165 15.1236 3.24002 15.1713 3.39804L15.9272 5.9226L17.711 3.29548C17.7809 3.19293 17.8969 3.13165 18.0202 3.13165Z" fill="#253B80"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.0427 7.85123L33.1457 0.834488C33.1626 0.72557 33.257 0.645383 33.3666 0.64502H34.6083C34.7455 0.64502 34.8507 0.767938 34.8291 0.903949L33.7414 7.79432C33.7131 7.97615 33.5567 8.1098 33.3725 8.1098H32.2635C32.1264 8.1098 32.0211 7.98725 32.0427 7.85123ZM23.5958 0.64538H20.9078C20.7243 0.64538 20.5679 0.779028 20.5392 0.960497L19.4523 7.85123C19.4306 7.98725 19.5359 8.1098 19.6732 8.1098H21.0524C21.1806 8.1098 21.2903 8.01634 21.3103 7.88905L21.6187 5.93581C21.6471 5.75379 21.8038 5.62033 21.9873 5.62033H22.8377C24.6084 5.62033 25.6298 4.76371 25.897 3.0663C26.0176 2.3237 25.9017 1.7402 25.554 1.33144C25.1723 0.882855 24.4953 0.64538 23.5958 0.64538ZM23.9059 3.16213C23.7593 4.12639 23.0224 4.12639 22.3096 4.12639H21.9044L22.1893 2.32552C22.2063 2.21678 22.2997 2.13659 22.4101 2.13659H22.596C23.081 2.13659 23.5393 2.13659 23.7757 2.41316C23.9168 2.57826 23.9597 2.82338 23.9059 3.16213ZM31.6287 3.13122H30.3426C30.232 3.13122 30.1382 3.21141 30.1216 3.32032L30.0647 3.68017L29.9743 3.5498C29.6957 3.1454 29.0749 3.0103 28.4548 3.0103C27.0325 3.0103 25.8182 4.0873 25.5817 5.59815C25.4591 6.35166 25.6331 7.07226 26.0607 7.57485C26.4536 8.03689 27.0141 8.22945 27.6817 8.22945C28.8276 8.22945 29.463 7.49266 29.463 7.49266L29.4057 7.85033C29.384 7.98707 29.4893 8.10962 29.6274 8.10962H30.7861C30.9696 8.10962 31.126 7.97597 31.1548 7.79414L31.8507 3.38979C31.872 3.25432 31.7667 3.13122 31.6287 3.13122ZM29.8349 5.63578C29.7114 6.37093 29.1271 6.86443 28.3828 6.86443C28.0098 6.86443 27.7104 6.7446 27.5186 6.51749C27.3284 6.29202 27.2569 5.9709 27.3167 5.61342C27.4333 4.88445 28.026 4.37496 28.7588 4.37496C29.1243 4.37496 29.4213 4.49624 29.6172 4.72535C29.8139 4.95682 29.8918 5.27975 29.8349 5.63578Z" fill="#179BD7"/>
</svg>

            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 640 512">/<path fill="#000000" d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9 .3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5 .1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8 .4 9.3 .7 11.6 .7z"/></svg>
            </div>
            <div className="flex justify-center items-center w-[46px] h-[30px] rounded-[5.38px] bg-[#FFFFFF]">
            <svg width="36" height="32" viewBox="0 0 29 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.751 9.6143H12.7025V1.45605H15.482C16.1864 1.45605 16.7871 1.69086 17.2785 2.16048C17.7809 2.6301 18.0321 3.20347 18.0321 3.88059C18.0321 4.5741 17.7809 5.14747 17.2785 5.61163C16.7925 6.07578 16.1919 6.30513 15.482 6.30513H13.751V9.6143ZM13.751 2.46082V5.30583H15.5038C15.9188 5.30583 16.2683 5.16385 16.5414 4.88536C16.8198 4.60686 16.9618 4.2683 16.9618 3.88605C16.9618 3.50926 16.8198 3.17616 16.5414 2.89767C16.2683 2.60825 15.9243 2.46628 15.5038 2.46628H13.751V2.46082Z" fill="#3C4043"/>
<path d="M20.7732 3.84783C21.5487 3.84783 22.1603 4.05533 22.608 4.47034C23.0558 4.88536 23.2797 5.45327 23.2797 6.17408V9.6143H22.2804V8.83888H22.2367C21.8053 9.47778 21.2265 9.7945 20.5057 9.7945C19.8886 9.7945 19.3753 9.6143 18.9603 9.24844C18.5453 8.88257 18.3378 8.42933 18.3378 7.88327C18.3378 7.30443 18.5562 6.84574 18.9931 6.50718C19.4299 6.16315 20.0142 5.99387 20.7405 5.99387C21.363 5.99387 21.8763 6.10855 22.2749 6.3379V6.09762C22.2749 5.73176 22.1329 5.42596 21.8435 5.16931C21.5541 4.91266 21.2156 4.78706 20.8279 4.78706C20.2436 4.78706 19.7794 5.03279 19.4408 5.52972L18.518 4.95088C19.0258 4.21369 19.7794 3.84783 20.7732 3.84783ZM19.419 7.89965C19.419 8.17268 19.5337 8.40203 19.7685 8.58223C19.9978 8.76243 20.2709 8.85527 20.5821 8.85527C21.0244 8.85527 21.4176 8.69145 21.7616 8.36381C22.1056 8.03616 22.2804 7.65392 22.2804 7.2116C21.9527 6.95495 21.4995 6.8239 20.9152 6.8239C20.4893 6.8239 20.1343 6.92765 19.8504 7.12969C19.561 7.34266 19.419 7.59931 19.419 7.89965Z" fill="#3C4043"/>
<path d="M28.9807 4.02808L25.4858 12.0662H24.4046L25.7043 9.25395L23.3999 4.02808H24.5412L26.2012 8.03622H26.223L27.8394 4.02808H28.9807Z" fill="#3C4043"/>
<path d="M9.58059 5.64439C9.58059 5.30256 9.55001 4.97546 9.49322 4.66093H5.09849V6.46295L7.6295 6.46349C7.52684 7.06308 7.19647 7.5742 6.69027 7.91494V9.08407H8.19686C9.07657 8.26989 9.58059 7.06635 9.58059 5.64439Z" fill="#4285F4"/>
<path d="M6.6908 7.915C6.27143 8.19786 5.73137 8.36332 5.09957 8.36332C3.87912 8.36332 2.84378 7.54094 2.473 6.43242H0.918898V7.63814C1.68885 9.16604 3.27135 10.2145 5.09957 10.2145C6.36316 10.2145 7.42471 9.79893 8.1974 9.08358L6.6908 7.915Z" fill="#34A853"/>
<path d="M2.32661 5.5379C2.32661 5.22664 2.37848 4.92576 2.47295 4.64289V3.43718H0.918851C0.600495 4.06898 0.421387 4.78214 0.421387 5.5379C0.421387 6.29366 0.601041 7.00682 0.918851 7.63862L2.47295 6.4329C2.37848 6.15004 2.32661 5.84916 2.32661 5.5379Z" fill="#FABB05"/>
<path d="M5.09957 2.71201C5.78925 2.71201 6.40685 2.94955 6.89448 3.41371L8.22961 2.07966C7.41871 1.32445 6.36153 0.86084 5.09957 0.86084C3.27189 0.86084 1.6888 1.90928 0.918851 3.43718L2.47295 4.64289C2.84373 3.53438 3.87912 2.71201 5.09957 2.71201Z" fill="#E94235"/>
</svg>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
