interface FtrProps {
  heading: string;
  cont1: string;
  cont2: string;
  cont3: string;
  cont4: string;
}

const FooterContent = (props: FtrProps) => {
  const { heading, cont1, cont2, cont3, cont4 } = props;
  return (
    <div>
      <h1 className="md:h-[18px] font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[18px] tracking-[3px]">
        {heading}
      </h1>
      <div className="flex h-[143px] lg:gap-4 lg:pt-5 flex-col text-[#00000099] justify-evenly">
        <p className="md:text-[16px] text-[14px] leading-[16px] md:leading-[19px]">
          {cont1}
        </p>
        <p className="md:text-[16px] text-[14px] leading-[16px] md:leading-[19px]">
          {cont2}
        </p>
        <p className="md:text-[16px] text-[14px] leading-[16px] md:leading-[19px]">
          {cont3}
        </p>
        <p className="md:text-[16px] text-[14px] leading-[16px] md:leading-[19px]">
          {cont4}
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
