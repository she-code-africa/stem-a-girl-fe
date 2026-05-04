import {
  // homePageHeroImage,
  pixelatedVideoGameIcon,
  pixelatedStarIcon,
  pixelatedPlayGameIcon,
} from "../../assets/images";

const Header = () => {
  return (
    <div className="bg-[#FFB8E0] relative">
      <div className=" w-[90%] max-w-[1280px] flex py-6 md:py-16 container mx-auto max-md:flex-col justify-between xl:px-4">
        <article className="flex-1 min-w-0 max-md:w-full space-y-2 lg:pr-6">
          <img
            src={pixelatedStarIcon}
            alt="star icon"
            fetchPriority="high"
            loading="eager"
            className="w-[8vw] max-w-[77px] min-w-[40px]"
          />
          <div className="flex">
            <h1 className="text-[#B70569] text-[40px] leading-[50px] md:text-[48px] md:leading-[50px] lg:text-[78px] lg:leading-[70px] xl:text-[120px] xl:leading-[109px] font-semibold">
              Equipping Girls to <br />
              Shape Tomorrow’s <br /> STEM Innovations
            </h1>
          </div>
          <p className="text-[#000000] md:text-base lg:text-2xl lg:leading-9 lg:tracking-[-1.5%] lg:max-w-[700px] font-medium">
            Inspiring and equipping African girls to explore and pursue
            interests in STEM through hands-on learning and club activities.
          </p>
        </article>
        <div className="relative flex justify-end items-center max-md:hidden">
          <img
            src={pixelatedVideoGameIcon}
            alt="video game icon"
            fetchPriority="high"
            loading="eager"
            className="absolute -top-[3.2rem] right-[4.2rem] w-[8vw] max-w-[120px] min-w-[60px]"
          />

          <img
            src={"/homepage-hero-image.webp"}
            alt="hero"
            fetchPriority="high"
            loading="eager"
            className=" max-h-[70vh] w-[450px] object-contain"
          />
        </div>
      </div>
      <img
        src={pixelatedPlayGameIcon}
        alt=""
        className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[10vw] max-w-[130px] min-w-[60px]"
      />
    </div>
  );
};

export default Header;
