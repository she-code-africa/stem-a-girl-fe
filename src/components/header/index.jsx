import { homePageHeroImage, pixelatedVideoGameIcon, pixelatedStarIcon, pixelatedPlayGameIcon } from "../../assets/images";

const Header = () => {
  return (
    <div className="bg-[#FFB8E0] relative">
      <div className=" w-[90%] max-w-[1280px] flex py-6 md:py-16 container mx-auto max-md:flex-col justify-between max-xl:px-4">
        <div className="max-w-[578px] space-y-2">
          <img src={pixelatedStarIcon} alt="" className="w-[8vw] max-w-[77px] min-w-[40px]" />
          <div className="flex">
            <h1 className="text-[#B70569] text-[40px] leading-[50px] max-w-[600px] lg:text-[56px] lg:leading-[72.8px] font-semibold">
              Empowering Girls to Shape Tomorrow’s STEM Innovations
            </h1>
          </div>
          <p className="text-[#000000] md:text-lg lg:text-xl lg:leading-9 lg:tracking-[-1.5%] md:w-3/5 lg:w-full font-medium">
            Inspiring and equipping African girls to explore and pursue interests in STEM through hands-on learning and club activities.
          </p>
        </div>
        <div className="relative max-md:hidden">
          <img
            src={pixelatedVideoGameIcon}
            alt=""
            className="absolute -top-[3.2rem] right-[4.2rem] w-[8vw] max-w-[120px] min-w-[60px]"
          />
          <img src={homePageHeroImage} alt="" className="w-full h-[80vh]" />
        </div>
      </div>
      <img src={pixelatedPlayGameIcon} alt="" className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[10vw] max-w-[130px] min-w-[60px]" />
    </div>
  );
};

export default Header;
