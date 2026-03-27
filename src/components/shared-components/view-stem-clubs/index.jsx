import { ourImpactBg } from "../../../assets/images";
import { stemClubSchools } from "../../../utils/appData";

const ViewStemClubs = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#FFF5FA] py-16 md:py-20">
      <img
        src={ourImpactBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="relative w-[90%] max-w-[1024px] mx-auto">
        <h2 className="text-center text-primaryPink text-3xl md:text-5xl lg:text-[64px] font-semibold mb-10 md:mb-14">
          Available Stem Clubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stemClubSchools.map((school, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border-2 px-8 py-8 flex items-center justify-center text-center font-semibold text-lg md:text-xl ${
                i === stemClubSchools.length - 1 && stemClubSchools.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-[50%] md:mx-auto w-full"
                  : ""
              } ${school.isPink ? "text-primaryPink border-primaryPink" : "text-[#5C0335] border-[#5C0335]"}`}
            >
              {school.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewStemClubs;
