import { RxCaretRight } from "react-icons/rx";
import { studentsImage } from "../../../assets/images";

const SchoolCard = ({ image, name }) => {
  return (
    <div className="max-w-[400px] mb-4">
      <img
        src={image || studentsImage}
        alt="school-pic"
        className="w-full rounded-2xl rounded-b-none "
      />
      <div className="border-[0.96px] border-[#E6E8EC] border-t-0 rounded-2xl p-6 space-y-4 shadow">
        <p className="text-[#210D15] font-bold md:text-xl">{name}</p>
        <p className="flex items-center text-primaryPink font-medium leading-[21px] hover:cursor-pointer">
          Learn More
          <RxCaretRight size="1.25rem" color="#B70569" className="mt-0.5" />
        </p>
      </div>
    </div>
  );
};

export default SchoolCard;
