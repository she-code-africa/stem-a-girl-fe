const ImpactStoryCard = ({ image, name, school, story }) => {
  return (
    <div className="rounded-3xl first:ml-4 md:first:ml-6 last:mr-4 md:last:mr-6 odd:bg-[#F0F5FF] even:bg-[#FFF9EE] [&:nth-child(3n)]:bg-[#F5F6F7] min-w-[424px] space-y-6 min-h-[365px] pt-10">
      <div className="flex w-10/12 mx-auto gap-4">
        <img src={image} alt={name} className="rounded-full w-12 h-12" />
        <div className="space-y-1">
          <p className="font-medium text-[#061C3D] leading-6">{name}</p>
          <p className="text-sm leading-5 text-[#42526B]">
            Student of <span className="text-primaryPink">{school}</span>
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <p className="leading-[26px] text-[#061C3D]">{story}</p>
      </div>
    </div>
  );
};

export default ImpactStoryCard;
