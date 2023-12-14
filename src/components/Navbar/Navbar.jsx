import { NavLink } from "react-router-dom";
import Hotline from "./Hotline";
import logoBrand from "../../assets/logo/diggo-brand.svg";
import { PrimaryButton, TertiaryButton } from "../Button/Button";
import { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    if (mobileMenu === false) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  document.querySelectorAll(".link").forEach((el) => {
    el.addEventListener("click", function () {
      setMobileMenu(false);
    });
  });

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white shadow">
        <Hotline />
        <div className="py-4 px-3 flex justify-between items-center gap-3 text-sm max-w-screen-xl mx-auto">
          <div className="basis-1/4 z-50">
            <a href="./" className="inline-block">
              <img src={logoBrand} className="w-24" />
            </a>
          </div>
          <div className="flex items-center basis-3/4 ">
            <div className={`hidden lg:flex justify-between items-center flex-1 animate__animated ${mobileMenu ? "mobile-show animate__fadeInLeft" : ""}`}>
              <div className="flex gap-0.5 lg:gap-0 list-menu">
                <NavLink to="produk" className={({ isActive }) => (isActive ? "text-primary" : "") + ` link no-underline hover:opacity-90 hover:text-primary hover:bg-sky-50 hover:rounded-full hover:bg-opacity-70 transition-all duration-200 px-5 py-2.5 `}>
                  Produk
                </NavLink>
                <NavLink to="layanan" className={({ isActive }) => (isActive ? "text-primary" : "") + ` link no-underline hover:opacity-90 hover:text-primary hover:bg-sky-50 hover:rounded-full hover:bg-opacity-70 transition-all duration-200 px-5 py-2.5`}>
                  Layanan
                </NavLink>
                <NavLink to="solusi" className={({ isActive }) => (isActive ? "text-primary" : "") + ` link no-underline hover:opacity-90 hover:text-primary hover:bg-sky-50 hover:rounded-full hover:bg-opacity-70 transition-all duration-200 px-5 py-2.5 `}>
                  Solusi
                </NavLink>
                <NavLink to="harga" className={({ isActive }) => (isActive ? "text-primary" : "") + ` link no-underline hover:opacity-90 hover:text-primary hover:bg-sky-50 hover:rounded-full hover:bg-opacity-70 transition-all duration-200 px-5 py-2.5`}>
                  Harga
                </NavLink>
                <NavLink to="paket" className={({ isActive }) => (isActive ? "text-primary" : "") + ` link no-underline hover:opacity-90 hover:text-primary hover:bg-sky-50 hover:rounded-full hover:bg-opacity-70 transition-all duration-200 px-5 py-2.5`}>
                  Paket
                </NavLink>
                <NavLink to="faq" className={({ isActive }) => (isActive ? "text-primary" : "") + ` link no-underline hover:opacity-90 hover:text-primary hover:bg-sky-50 hover:rounded-full hover:bg-opacity-70 transition-all duration-200 px-5 py-2.5`}>
                  FAQ
                </NavLink>
              </div>
              <div className="flex gap-3 ms-auto list-button">
                <TertiaryButton textButton={"Masuk"} link="https://dashboard.diggo.id/login" />
                <PrimaryButton textButton={"Coba Gratis"} link="https://dashboard.diggo.id/register" />
              </div>
            </div>
            <button className="block lg:hidden btn btn-sm ms-auto bg-transparent z-50 text-black" onClick={() => toggleMenu()}>
              {/* <i className="fa-regular fa-bars-staggered"></i> */}
              {mobileMenu ? <i className="fa-regular fa-x"></i> : <i className="fa-regular fa-bars-staggered"></i>}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
