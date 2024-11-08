import Button from "./Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Menu from '../assets/icons/menu.svg'

export default function Header() {

const [showNav, setShowNav] = useState<boolean>(false);
const toggleNav = () => {
  setShowNav(!showNav);
};


  return (
    <header className="bg-[#111318] sticky top-0 flex z-[999] items-center justify-between p-5 md:px-10 md:py-5 lg:px-20 lg:py-5">
      <img src={Logo} alt="DexterPro Technology Logo" className="h-8" />
      <img
        src={Menu}
        alt="DexterPro Technology Menu Icon"
        className="lg:hidden"
        onClick={() => toggleNav()}
      />
      <nav
        className={`lg:flex lg:items-center justify-end flex-1 lg:gap-20 ${
          showNav
            ? "bg-[#111318] text-[#687171] text-[18px] shadow-md w-[100%] animate-fade transition md:w-[50%] absolute top-[75px] left-[0] md:left-[45%] flex flex-col gap-10 p-5"
            : "hidden"
        }`}
      >
        <ul className="flex-cols lg:flex  lg:items-center gap-8">
          <li>
            <NavLink
              to="#hero"
              className="text-white text-base font-medium leading-6 hover:text-gray-300 transition-colors"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#about"
              className="text-white text-base font-medium leading-6 hover:text-gray-300 transition-colors"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#services"
              className="text-white text-base font-medium leading-6 hover:text-gray-300 transition-colors"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="text-white text-base font-medium leading-6 hover:text-gray-300 transition-colors"
            >
              Case Studies
            </NavLink>
          </li>
        </ul>

        <Button className=" " text="Get in touch" />
      </nav>
    </header>
  );
}
