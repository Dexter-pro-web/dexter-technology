
import Logo from "../assets/Logo.svg";
import X_logo from "../assets/icons/X_logo.svg";
import Facebook_logo from "../assets/icons/facebook_logo.svg";
import LinkedIn_logo from "../assets/icons/linkedIn_logo.svg";

export default function Footer() {
  const list = [
    ["Product and Services", "Home", "About us", "Services", "Testimonials"],
    [
      "Company",
      "Contact us",
      "36b Jay Jay Oladimeji Close, Ikate, Lekki, Lagos State",
    ],
  ];

  return (
    <footer className="bg-[#111318] text-white p-5 md:p-10 lg:p-20 2xl:px-60">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="lg:w-1/3">
            <img src={Logo} alt="Company Logo" className="max-w-full h-auto" />
          </div>
          <div className="lg:w-2/3 flex lg:justify-end w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {list.map((listFields, index) => (
                <ul key={index} className="space-y-3">
                  {listFields.map((listItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`${
                        itemIndex === 0 ? "text-[#E3E1E1]" : ""
                      } text-[#FFFFFF] text-sm`}
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#5E5F6E40] pt-8">
          <div className="flex flex-row justify-between items-center gap-4">
            <h2 className="text-sm">&copy; 2024 DexterPro Technologies.</h2>
            <ul className="flex gap-6">
              {[
                {
                  src: X_logo,
                  alt: "X or Twitter Logo",
                  link: "https://x.com/dexterproA",
                },
                {
                  src: Facebook_logo,
                  alt: "Facebook Logo",
                  link: "https://www.facebook.com/dexterproa/",
                },
                {
                  src: LinkedIn_logo,
                  alt: "LinkedIn Logo",
                  link: "https://www.linkedin.com/company/dexacad/",
                },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.src}
                      alt={social.alt}
                      className="w-6 h-6"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
