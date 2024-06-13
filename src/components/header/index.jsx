import FloraImg from "../../assets/images/floral.svg";
import { homeHeroImage } from "../../assets/images";

const Header = () => {
  return (
    <div className="bg-[#FFF7FC]">
      <div className=" w-[90%] max-w-[1280px] flex py-6 md:py-4 container mx-auto max-md:flex-col justify-between max-xl:px-4">
        <div className="max-w-[578px] space-y-2">
          <div className="flex">
            <h1 className="text-[40px] leading-[50px] lg:text-[56px] max-w-[530px] lg:leading-[72.8px] font-semibold">
              Inspiring African girls to pursue careers in STEM
            </h1>
            <img src={FloraImg} alt="" className="self-end max-md:w-1/5" />
          </div>
          <p className="text-[#4B5563] md:text-lg lg:text-xl lg:leading-9 lg:tracking-[-1.5%] md:w-4/5 lg:w-full">
            Clubs and workshops for secondary school girls across Africa to
            explore STEM subjects in a fun and supportive environment.
          </p>
          <a
            href="#zero-tech-skills"
            className="bg-[#B70569] w-[240px] max-sm:text-sm rounded-[30px] text-white py-[18px] mt-2 inline-block text-center"
          >
            Learn More{" "}
          </a>
        </div>
        <div className="max-md:hidden">
          <img src={homeHeroImage} alt="" className="md:w-[850px] lg:w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Header;
