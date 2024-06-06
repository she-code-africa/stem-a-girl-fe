import { Link } from "react-router-dom";
import FloraImg from "../../assets/images/floral.svg";

const Header = () => {
  return (
    <div className="bg-[#FFF7FC]">
      <div className="flex py-10 md:py-14">
        <div className="max-w-[578px] space-y-2">
          <div className="flex">
            <h1 className="text-[56px] max-w-[530px] leading-[72.8px] font-semibold">
              Inspiring African girls to pursue careers in STEM
            </h1>
            <img src={FloraImg} alt="" className="self-end" />
          </div>
          <p className="text-[#4B5563] md:text-xl md:leading-9 md:tracking-[-1.5%]">
            Clubs and workshops for secondary school girls across Africa to
            explore STEM subjects in a fun and supportive environment.
          </p>
          <Link
            to="/"
            className="bg-[#B70569] w-[240px] rounded-[30px] text-white py-[18px] inline-block text-center"
          >
            Learn More{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
