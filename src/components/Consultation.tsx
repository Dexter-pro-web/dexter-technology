import DexterImg from '../assets/images/DexterImg.png'


interface consultationProps {
  id: string;
}
const Consultation = ({ id }: consultationProps) => {
  return (
    <div id={id} className="container w-[80%] mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 md:p-12 relative flex">
          <img
            src={DexterImg}
            alt=""
            className="absolute top-0 md:left-[15%] xl:left-60 w-[70%] h-full"
          />
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="url(#grad)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a90e2" />
                <stop offset="100%" stopColor="#8e44ad" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className=" text-[36px] lg:text-[46px] leading-[45.67px] lg:leading-[55.67px] font-bold mb-4 text-gray-800">
              Boost your business process with DexterPro Technologies
            </h2>
            <p className="text-[16px] text-gray-600 mb-8">
              Whether you're looking to harness technology for growth or need
              reliable tech support, we're here to help you succeed. Let's build
              something great together!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Book a free consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
