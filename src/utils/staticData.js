import GameControl from "../components/shared-components/icons/GameControl";
import CodeTag from "../components/shared-components/icons/CodeTag";
import RobotIcon from "../components/shared-components/icons/RobotIcon";


export const coursesData = [
  {
    icon: <GameControl />,
    title: "Game Development",
    description:
      "Build your own digital worlds, design cool characters, and create the next addictive mobile game. Learn from absolute zero to publishing your first game.",
    levels: 6,
    duration: "8-10 hours",
    proficiency: "Beginner to Advanced",
    cardGradient: "bg-pinkGradient",
    url: "/courses/game-development",
  },
  {
    icon: <CodeTag />,
    title: "Coding with Scratch",
    description:
      "Bring your ideas to life using drag-and-drop blocks. Create animations, games, and interactive stories while learning real programming concepts.",
    levels: 7,
    duration: "9-12 hours",
    proficiency: "Beginner to Advanced",
    cardGradient: "bg-blueGradient",
    url: "/courses/coding",
  },

  {
    icon: <RobotIcon />,
    title: "Robotics",
    description:
      "Discover how robots work, move, and think. Design, build, code, and innovate with hands-on robotics projects from simple to advanced.",
    levels: 8,
    duration: "10-14 hours",
    proficiency: "Beginner to Advanced",
    cardGradient: "bg-orangeGradient ",
    url: "/courses/robotics",
  },
];

export const howItWorks = [
  {
    id: 1,
    title: "Watch & Learn",
    description: "Follow video lessons that guide you step-by-step",
  },
  {
    id: 2,
    title: "Practice & Build",
    description: "Complete hands-on projects and challenges",
  },
  {
    id: 3,
    title: "Test & Progress",
    description: "Watch each video in full before moving on to the next",
  },
];


