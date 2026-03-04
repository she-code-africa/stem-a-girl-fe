import { stemClubStudents1, stemClubStudents2, stemClubStudents3 } from "../../../assets/images";

const activities = [
  {
    image: stemClubStudents1,
    title: "Routine Club Meetups",
    description:
      "Our STEM Club meet-ups are designed to be engaging, educational, and fun. Each meeting offers a variety of activities to spark your curiosity and deepen your understanding of STEM.",
  },
  {
    image: stemClubStudents2,
    title: "Interactive Coding, Robotics & Game Development Workshops",
    description:
      "Exploring initiatives that are making tech more inclusive for women across Africa.",
  },
  {
    image: stemClubStudents3,
    title: "Group Discussions and Brainstorming",
    description:
      "Plan projects, brainstorm ideas, and solve problems with your peers.",
  },
];

const StemClubActivities = () => {
  return (
    <section className="w-full bg-primaryPink py-16 md:py-20">
      <div className="w-[90%] max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10 md:mb-14">
          STEM Club Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {activities.map((activity, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 overflow-hidden flex flex-col">
              <div className="h-72 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="p-5 flex flex-col gap-1">
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
