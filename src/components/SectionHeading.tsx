


export default function SectionHeading({title, heading, paragraph, color}: {title: string, heading: string, paragraph: string, color: string}) {
  console.log(color)
    return (
      <div className=" md:w-[65%] lg:w-[75%] xl:w-[50%] flex flex-col gap-5 items-center mx-auto">
        <span
          className={` text-[12.7px] font-[500] p-2 border-l-4 `}
          style={{ color: color, borderLeftColor: color }}
        >
          {title}
        </span>
        <h2 className="text-[#131316] text-[36px] leading-[45.67px] md:text-[46px] md:leading-[55.67px] text-center font-[500]">
          {heading}
        </h2>
        <p className="text-[#5F5F6D] text-[14px] md:text-[16px] md:leading-[28px] font-[500] text-center">
          {paragraph}
        </p>
      </div>
    );
}
