import { type NavLinkProps } from "react-router-dom";

export type NavbarLink =
  | { type: "nav"; label: string; to: string; navProps?: NavLinkProps }
  | {
      type: "anchor";
      label: string;
      href: string;
      anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    }
  | {
      type: "button";
      label: string;
      onClick: () => void;
      buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    };
