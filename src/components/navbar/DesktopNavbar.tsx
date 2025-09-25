import { type FC } from "react";

interface DesktopNavbarProps {
  children?: React.ReactNode;
}

const DesktopNavbar: FC<DesktopNavbarProps> = ({
  children,
}) => {
  return (
    <div className="hidden lg:flex justify-center flex-grow space-x-20 font-bold font-heading tracking-wide">
      {children}
    </div>
  );
};

export default DesktopNavbar;
