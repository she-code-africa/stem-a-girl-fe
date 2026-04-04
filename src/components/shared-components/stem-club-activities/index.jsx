import { stemClubActivitiesCards as activities } from "../../../utils/appData";

const StemClubActivities = () => {
  return (
    <section className="w-full bg-primaryPink py-16 md:py-20">
      <div className="w-[90%] max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold text-center text-white mb-10 md:mb-14">
          STEM Club Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-[18.26px] overflow-hidden flex flex-col"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="pt-5 flex flex-col gap-1">
                <h3 className="font-figtree font-bold text-sm md:text-base text-[#5C0335]">
                  {activity.title}
                </h3>
                <p className="text-[#7D355D] font-figtree font-medium text-sm md:text-base leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StemClubActivities;
