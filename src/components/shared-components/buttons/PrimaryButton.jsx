import { Link } from "react-router-dom";

const PrimaryButton = ({
  isLink,
  title,
  url,
  className,
  icon,
  iconLeft = false,
  handleClick,
  hoverBloom,
}) => {
  return (
    <>
      {isLink ? (
        <Link
          to={url}
          className={`bg-primaryPink gap-1 text-white ${hoverBloom ? "hover:bg-scaBloom hover:text-primaryBtnHover" : "hover:bg-primaryBtnHover"}  duration-300 transition-colors ease-linear ${className} flex items-center justify-center ${iconLeft ? "flex-row-reverse" : "flex-row"}`}
        >
          {title} {icon}
        </Link>
      ) : (
        <button
          className={`gap-1 flex items-center justify-center ${iconLeft ? "flex-row-reverse" : "flex-row"} overflow-hidden bg-primaryPink text-white ${hoverBloom ? "hover:bg-scaBloom hover:text-primaryBtnHover" : "hover:bg-primaryBtnHover"} duration-300 transition-colors ease-linear ${className}`}
          onClick={handleClick}
        >
          {title} {icon}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
