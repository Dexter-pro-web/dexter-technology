import Button from "./Button";


interface HeroProps {
    header: string;      
    paragraph: string;  
    button_text: string; 
    image: string;
    ref: any;    
}


export default function Hero({ header, paragraph, button_text, image, ref }: HeroProps) {
    return (
      <section ref={ref} className="bg-[#111318] relative grid  lg:grid-cols-[40%_60%] p-5 md:px-10 lg:px-20 min-h-screen">
        <div className="my-auto flex flex-col items-start gap-5 md:gap-10 ">
          <h1 className="text-[40px] md:text-[50px] xl:text-[56px] leading-[50px]  md:leading-[60px] xl:leading-[67.77px] font-[700] text-[#FFFFFF] w-full">
            {header}
          </h1>
          <p className=" text-[16px] md:text-[18px] font-[500] leading-[28px] text-[#FAFAFA]">
            {paragraph}
          </p>
          <Button text={button_text}></Button>
        </div>
        <div
          className="w-full h-full hidden lg:flex"
        >
          <img src={image} alt="DexterPro Technology Hero Image" className="w-full lg:my-auto lg:h-[70%] xl:w-full  h-full" />
        </div>
      </section>
    );
}