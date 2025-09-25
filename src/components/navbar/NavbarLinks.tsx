import { NavLink } from "react-router-dom";
import React from "react";
import { type NavbarLink } from "./types";

interface NavbarProps {
  links: NavbarLink[];
  getNavLinkClass: ({ isActive }: { isActive: boolean }) => string;
}

export const NavbarLinks: React.FC<NavbarProps> = ({
  links,
  getNavLinkClass,
}) => {
  return (
    <>
      {links.map((link, i) => {
        switch (link.type) {
          case "nav":
            return (
              <NavLink
                key={i}
                to={link.to}
                className={getNavLinkClass}
                {...link.navProps}
              >
                {link.label}
              </NavLink>
            );

          case "anchor":
            return (
              <a
                key={i}
                href={link.href}
                {...link.anchorProps}
                className="font-semibold hover:text-gray-500"
              >
                {link.label}
              </a>
            );

          case "button":
            return (
              <button
                key={i}
                onClick={link.onClick}
                {...link.buttonProps}
                className="font-semibold hover:text-gray-500"
              >
                {link.label}
              </button>
            );

          default:
            return null;
        }
      })}
    </>
  );
};
