import "./App.css";
import { useRef } from "react";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import Button from "./components/Button";
// import Carousel from "./components/Carousel";
import { AnimatedCounter } from "./components/AnimatedCounter";
import DexterAcademy from "./components/DexterAcademy"
// import Img1 from "./assets/images/Mask group.png";
// import Img2 from "./assets/images/Mask group (1).png";
// import Img3 from "./assets/images/Mask group (2).png";
// import Img4 from "./assets/images/Mask group (3).png";
import Image from "./assets/images/Frame 1000006206 1.png";
import CpuCharge from "./assets/icons/cpu-charge.svg";
import LikeTag from "./assets/icons/like-tag.svg";
import MedalStar from "./assets/icons/medal-star.svg";
import Lovely from "./assets/icons/lovely.svg";
import Software from "./assets/images/softwareImg.png";
import Technical from "./assets/images/technicalImg.png";
import Porcurement from "./assets/images/procurementImg.png";
import CyberSec from "./assets/images/cybersecImg.png";
import Technology from "./assets/images/technologyImg.png";
import Enterprise from "./assets/images/enterpriseImg.png";
// import DexterApp from "./assets/images/dexterapp.png";
// import FrebsonGym from "./assets/images/frebsongym.png";
import Consultation from "./components/Consultation";



function App() {

    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);

  const aboutUs = [
    {
      img: CpuCharge,
      heading: "Innovation",
      content: "We create solutions tailored to your unique needs.",
    },
    {
      img: MedalStar,
      heading: "Professionalism",
      content:
        "We provide technical support and project delivery in line with international standards.",
    },
    {
      img: LikeTag,
      heading: "Client Satisfaction",
      content:
        "Our goal is to ensure you derive top-notch value from our solutions.",
    },
    {
      img: Lovely,
      heading: "Integrity",
      content:
        "We are committed to ethical practices, ensuring your privacy and trust are never compromised.",
    },
  ];

  const services = [
    {
      img: Software,
      heading: "Software Development",
      content:
        "From custom web and mobile applications to enterprise-level software solutions, we are committed to delivering tailored solutions that streamline core processes, enhance efficiency, and deliver significant value.",
      background: "linear-gradient(170deg, #111318, #07162C, #1A2F4D)",
    },
    {
      img: CyberSec,
      heading: "Cybersecurity",
      content:
        "Our comprehensive cybersecurity services are designed to safeguard your organization from cyber threats and protect your valuable data.",
      background: "#FFFFFF",
    },
    {
      img: Technical,
      heading: "Technical Support",
      content:
        "Our technical support ensures your systems run smoothly, resolving issues quickly to keep your business on track.",
      background: "#FFFFFF",
    },
    {
      img: Technology,
      heading: "Technology Consulting",
      content:
        "From technology assessment to implementation and ongoing support, we're here to help you make informed decisions and achieve your goals.",
      background: "#FFFFFF",
    },
    {
      img: Porcurement,
      heading: "Procurements & Installations",
      content:
        "Our team specializes in selecting the right hardware, managing software licenses, and setting up your infrastructure.",
      background: "#FFFFFF",
    },
    {
      img: Enterprise,
      heading: "Enterprise Solutions",
      content:
        "Our comprehensive enterprise solutions help you scale your business and optimize operations. From ERP implementation to cloud deployment and data management, we provide tailored solutions to drive efficiency and growth.",
      background: "#FFFFFF",
    },
  ];

  // const portfolio = [
  //   {
  //     img: DexterApp,
  //     heading: "Dexter App",
  //     content:
  //       "The Dexter App links you with pros for services like plumbing, food delivery, laundry, and more. It's easy to use, updated often, and available on both Android and Apple devices.",
  //   },
  //   {
  //     img: FrebsonGym,
  //     heading: "Frebson Gym",
  //     content:
  //       "A complete digital solution for gym management, offering a smooth user experience for both gym staffs and gym members.",
  //   },
  // ];

  return (
    <>
      <Hero
        header="Empowering Your Business with Technology that Works"
        paragraph={
          "We believe technology drives growth and innovation. We're dedicated to delivering quality solutions, excellent service, and building lasting partnerships to elevate your business."
        }
        button_text={"Book a free consultation"}
        image={Image}
        
        ref={heroRef}
      />
      <section className="grid gap-20 p-5 md:px-10 md:py-10 lg:p-20 ">
        <div ref={aboutRef} className="grid gap-10">
          <SectionHeading
            title="About Us"
            heading="Leading Tech Service Company Based in Lagos"
            paragraph="At DexterPro Technology, we empower businesses in Nigeria and Africa with innovative tech solutions. Our core values focus on building strong partnerships, maintaining client trust, and consistently delivering value for long-term success."
            color="#5856D6"
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-10">
            {aboutUs?.map((item, index) => (
              <div
                key={index}
                className="grid gap-5 p-5 border-2 border-[#F0F0F0] rounded-md"
              >
                <img src={item?.img} alt="DexterPro Technology About us Icon" />
                <div className="grid gap-5">
                  <h3 className="text-[#210203] text-[18px] font-[500] ">
                    {item?.heading}
                  </h3>
                  <p className="text-[#5F5F6D] text-[14px] leading-[24px] font-[400] text-left">
                    {item?.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div ref={servicesRef} className="flex flex-col gap-10 items-start">
          <SectionHeading
            title="Services"
            heading="Expert Tech Solutions Tailored for Success."
            paragraph="Our skilled team offers tailored tech solutions, from software development to technical support. We’re here to optimize your operations, boost efficiency, and help you succeed with services designed to meet your unique needs."
            color="#34C759"
          />
          <div className="flex  flex-wrap gap-5  ">
            {services?.map((item, index) => (
              <div
                key={index}
                className={`${
                  index == 0
                    ? "grid md:grid-cols-2 col-span-2 lg:basis-full  xl:basis-1/2 p-5"
                    : ""
                } ${
                  index == 1 || index == 2
                    ? "md:basis-[47.5%] xl:basis-[23%]"
                    : ""
                } ${
                  ![0, 1, 2].includes(index)
                    ? "md:basis-[47.5%] xl:basis-[32%]"
                    : ""
                } 
                    flex flex-col gap-5 border-2 border-[#F0F0F0] rounded-[30px] shadow-sm`}
                style={{ background: item?.background }}
              >
                <div
                  className={`${
                    index === 0 ? "md:order-last m-auto " : "w-full"
                  } ${index > 0 ? " basis-[50%]" : ""}  `}
                >
                  <img
                    src={item?.img}
                    alt="DexterPro Technology About us Icon"
                    className={`${
                      index == 1 || index == 2 ? "w-full" : ""
                    } mx-auto  xl-w-[70%] `}
                  />
                </div>

                <div
                  className={`flex flex-col ${
                    index == 0 ? "flex col-span-1" : ""
                  }   p-5`}
                >
                  <h3
                    className={`${
                      index == 0 ? "text-[#FFFFFF] text-left" : ""
                    }text-center text-[#210203] text-[18px] font-[700] `}
                  >
                    {item?.heading}
                  </h3>
                  <p
                    className={`${
                      index === 0 ? "text-[#FAFAFA] " : "text-center"
                    } text-[#5F5F6D] text-[14px] leading-[24px] font-[400] `}
                  >
                    {item?.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button text={"Book a free consultation"} className={"mx-auto"} />
        </div>
        {/* <div className=" gap-10">
          <SectionHeading
            title="Our Portfolio"
            heading="Showcasing Our Best Work"
            paragraph="At DexterPro Technology, we pride ourselves on delivering impactful, user-focused solutions across a range of industries. Here's a glimpse of some of our standout projects:"
            color="#32ADE6"
          />
          <Carousel portfolio={portfolio} />
        </div> */}
        <div className="flex flex-col md:flex-row p-10 md:p-5 gap-5 xl:gap-10 rounded-lg border-[#F0F0F0] border-2 ">
          <h2 className="text-[32px] font-[550] leading-[32px] m-auto basis-1/4">
            Dexterpro by the numbers.
          </h2>

          <div className="flex flex-col w-full md:basis-[32%] lg:basis-1/4">
            <h3 className="text-[40px]  font-[500]">
              <AnimatedCounter target={500} duration={2}/>+
            </h3>
            <span className="text-[18px] font-[400] text-[#5F5F6D]">
              Hours of consultation
            </span>
          </div>
          <div className=" lg:pl-5 lg:border-l-2 border-l-[#F0F0F0] flex flex-col w-full basis-1/4">
            <h3 className="text-[40px]  font-[500]">
              <AnimatedCounter target={25} duration={2}/>+
            </h3>
            <span className="text-[18px] font-[400] text-[#5F5F6D]">
              Client satisfied
            </span>
          </div>
          <div className=" lg:pl-5 lg:border-l-2 border-l-[#F0F0F0] flex flex-col w-full  md:basis-[32%] lg:basis-1/4">
            <h3 className="text-[40px]  font-[400]">
              <AnimatedCounter target={5} duration={2}/>+
            </h3>
            <span className="text-[18px] font-[400] text-[#5F5F6D]">
              Solutions delivered
            </span>
          </div>
        </div>
        <DexterAcademy />
        <Consultation />
      </section>
    </>
  );
}

export default App;
