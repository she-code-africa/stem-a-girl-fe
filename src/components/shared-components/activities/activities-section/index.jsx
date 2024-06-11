import { clubActivities } from "../../../../utils/appData";
import InfoCardHeader from "../info-card/InfoCardHeader";

const ActivitiesSection = () => {
  const ClubActivity = ({ title, img, description }) => {
    return (
      <div className="rounded-2xl md:max-w-[335px] w-full px-4 py-4 md:px-6 md:py-6 first:bg-[#F0F5FF] [&:nth-child(2)]:bg-[#FFF7FC] last:bg-[#F5F6F7]">
        <img src={img} alt="" />
        <div className="space-y-2 text-[#210D15]">
          <p className="font-medium text-lg md:text-xl md:leading-[30px]">
            {title}
          </p>
          <p className="text-sm leading-[22px]">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container mx-auto mb-10 max-xl:px-4">
      <InfoCardHeader
        infoCardHeading="Our Club Activities"
        infoCardParagraph="Since the inception of the STEM Club initiative, we have had the
        privilege of visiting several schools, where we have:"
      />

      <div className="flex max-md:flex-col w-full justify-center gap-3 my-10">
        {clubActivities.map((activity) => (
          <ClubActivity {...activity} />
        ))}
      </div>
    </div>
  );
};
export default ActivitiesSection;
