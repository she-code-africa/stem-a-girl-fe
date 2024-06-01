import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
export const InfoCustomNextArrows = ({ onClick }) => {
  return (
    <>
      <div
        className={`w-[41px] h-[41px] rounded-[50%] border border-[rgba(156,163,175,1)] text-[rgba(156,163,175,1)] flex items-center justify-center absolute -bottom-11 translate-x-2/4 right-2/4 -mr-14 cursor-pointer`}
        onClick={onClick}
      >
        <FaArrowRightLong />
      </div>
    </>
  );
};

export const InfoCustomPrevArrows = ({ onClick }) => {
  return (
    <>
      <div
        className={`w-[41px] h-[41px] rounded-[50%] border border-[rgba(156,163,175,1)] text-[rgba(156,163,175,1)] flex items-center justify-center -bottom-11 absolute translate-x-2/4 left-2/4 -ml-14 cursor-pointer`}
        onClick={onClick}
      >
        <FaArrowLeftLong />
      </div>
    </>
  );
};
