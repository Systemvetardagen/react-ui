// Navbar.tsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { NavbarLinks } from "./NavbarLinks";
import { type NavbarLink } from "./types";

interface NavbarProps {
  links: NavbarLink[];
  logo: string;
}

export const Navbar: React.FC<NavbarProps> = ({ links, logo }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold text-[20px] text-black relative ${
      isActive
        ? "text-black underline underline-offset-4"
        : "hover:text-gray-500"
    }`;

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0 w-full rounded-none h-14"
          : "absolute top-8 w-[90vw] mx-[5vw] rounded-full"
      } flex bg-white text-black px-4 lg:py-1 z-20 items-center justify-between transition-all duration-150 shadow-md`}
    >
      <NavLink to="/" className="flex-shrink-0">
        <img src={logo} alt="Left Logo" className="h-10 p-0 m-0" />
      </NavLink>

      {/* Desktop Navbar */}
      <DesktopNavbar>
        <NavbarLinks links={links} getNavLinkClass={getNavLinkClass} />
      </DesktopNavbar>

      {/* Mobile Navbar */}
      <MobileNavbar isSticky={isSticky}>
        <NavbarLinks links={links} getNavLinkClass={getNavLinkClass} />
      </MobileNavbar>
    </nav>
  );
};
