import { type FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MobileNavbarProps {
  isSticky: boolean;
  children?: React.ReactNode;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ isSticky, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024 && isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Hamburger button */}
      <div className="block lg:hidden z-30">
        <button
          onClick={toggleMenu}
          className="flex justify-center items-center"
        >
          <img
            src={isOpen ? "/svgs/cross.svg" : "/svgs/burger.svg"}
            className="h-12 p-1 transition-all duration-300 ease-in-out"
            style={{
              opacity: isOpen ? 1 : 0.8,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
            alt="Toggle Menu"
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 flex flex-col justify-center gap-4 ${
            isSticky ? "pt-3" : "pt-10"
          } pl-12 pr-10 ${
            isSticky ? "pb-4" : "pb-10"
          } font-bold font-heading tracking-wide bg-white w-screen transition-transform duration-300 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
