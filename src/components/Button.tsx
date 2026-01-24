import { Link } from "react-router-dom";
type ButtonProps = {
  text?: string;
  href?: string;
  iconSrc?: string;
  bgColor?: string;
  padding?: string;
  onClick?: () => void;
};

export default function Button({
  text,
  href = "/",
  iconSrc,
  bgColor,
  padding,
  onClick, // 
}: ButtonProps) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-1 font-semibold capitalize rounded-[8px]
        hover:bg-[#25a000] transition-all duration-300 ease-in-out hover:text-white cursor-pointer
        ${bgColor ? "bg-[#162711] text-white" : "bg-[#c2c2c2] text-black"}`}
        style={{ padding }}
      >
        {iconSrc && <img src={iconSrc} alt="" className="w-8 h-8" />}
        {text && <span>{text}</span>}
      </button>
    );
  }

  return (
    <Link
      to={href}
      className={`inline-flex items-center justify-center gap-1 font-semibold capitalize rounded-[8px]
      hover:bg-[#25a000] transition-all duration-300 ease-in-out hover:text-white cursor-pointer
      ${bgColor ? "bg-[#162711] text-white" : "bg-[#c2c2c2] text-black"}`}
      style={{ padding }}
    >
      {iconSrc && <img src={iconSrc} alt="" className="w-8 h-8" />}
      {text && <span>{text}</span>}
    </Link>
  );
}
