export interface ButtonProps {
  label?: string;
  size?: Size;
  color?: string;
  className?: string;
}
export type Size = "sm" | "md" | "lg" | "xl";

export const Button = ({
  label,
  size = "sm",
  color = "lightblue",
  className,
}: ButtonProps) => {
  let sizeClass = "";
  switch (size) {
    case "sm":
      sizeClass = "tw:px-2 tw:py-1 tw:text-sm";
      break;
    case "md":
      sizeClass = "tw:px-4 tw:py-2 tw:text-base";
      break;
    case "lg":
      sizeClass = "tw:px-6 tw:py-3 tw:text-lg";
      break;
    case "xl":
      sizeClass = "tw:px-8 tw:py-4 tw:text-xl";
      break;
  }

  return (
    <button
      style={{ backgroundColor: color }}
      className={`tw:rounded-full tw:px-4 tw:py-2 tw:text-black ${sizeClass} ${className}`}
    >
      {label ? label : "Button"}
    </button>
  );
};
