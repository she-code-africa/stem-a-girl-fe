import GameControl from "../components/shared-components/icons/GameControl";
import CodeTag from "../components/shared-components/icons/CodeTag";
import RobotIcon from "../components/shared-components/icons/RobotIcon";
import { posterImage } from "../assets/images";

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
    description: "Completely watch videos to unlock the next level",
  },
];

export const roadmapData = [
  {
    week: 1,
    id: "week-1",
    title: "Lorem ipsum pellentesque tincidunt est",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin accumsan sem fusce dui porttitor enim volutpat etiam proin. Nunc fermentum dolor nunc euismod sollicitudin dolor et ipsum varius.",
    duration: "48 mins",
    completed: false,
    status: "inProgress",
    lessons: [
      {
        id: "lesson-1",
        type: "video",
        title: "Lorem ipsum pellentesque",
        duration: "10 min",
        completed: true,
        task: "Create a Scratch account and explore the different block categories.",
        poster: posterImage,
        status: "completed",
        link: "https://www.youtube.com/embed/tasLK8UrE88?si=Cq0dKpW9H8fIMuIQ",
        resources: [
          {
            title: "Scratch Interface Guide",
            url: "",
          },
          {
            title: "Scratch Interface Guide",
            url: "",
          },
        ],
      },

      {
        id: "lesson-2",
        type: "pdf",
        status: "inProgress",

        link: "https://drive.google.com/file/d/1VkIQeixK9m5x2okWz_0tLWgXJN-gpE1-/view",
        title: "Lorem ipsum pellentesque",
        duration: "10 min",
        completed: false,
        task: "Create a Scratch account and explore the different block categories.",
        poster: posterImage,
        resources: [
          {
            title: "Scratch Interface Guide",
            url: "",
          },
          {
            title: "Scratch Interface Guide",
            url: "",
          },
        ],
      },
      {
        id: "lesson-3",
        type: "video",
        status: "inComplete",
        link: "https://www.youtube.com/embed/tasLK8UrE88?si=Cq0dKpW9H8fIMuIQ",
        title: "Lorem ipsum pellentesque",
        duration: "10 min",
        completed: false,
        task: "Create a Scratch account and explore the different block categories.",
        poster: posterImage,
        resources: [
          {
            title: "Scratch Interface Guide",
            url: "",
          },
          {
            title: "Scratch Interface Guide",
            url: "",
          },
        ],
      },
      {
        id: "lesson-4",
        type: "video",
        status: "inComplete",
        link: "https://www.youtube.com/embed/tasLK8UrE88?si=Cq0dKpW9H8fIMuIQ",
        title: "Lorem ipsum pellentesque",
        duration: "10 min",
        completed: false,
        task: "Create a Scratch account and explore the different block categories.",
        poster: posterImage,
        resources: [
          {
            title: "Scratch Interface Guide",
            url: "",
          },
          {
            title: "Scratch Interface Guide",
            url: "",
          },
        ],
      },
    ],
  },
  {
    id: "week-1",
    week: 2,
    title: "Lorem ipsum pellentesque tincidunt est",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin accumsan sem fusce dui porttitor enim volutpat etiam proin. Nunc fermentum dolor nunc euismod sollicitudin dolor et ipsum varius.",
    duration: "48 mins",
    completed: false,
    status: "locked",
    lessons: [
      {
        id: "lesson-1",
        type: "pdf",
        status: "inComplete",
        link: "https://drive.google.com/file/d/1VkIQeixK9m5x2okWz_0tLWgXJN-gpE1-/view",
        title: "Lorem ipsum pellentesque",
        duration: "10 min",
        completed: false,
        task: "Create a Scratch account and explore the different block categories.",
        poster: posterImage,
        resources: [
          {
            title: "Scratch Interface Guide",
            url: "",
          },
          {
            title: "Scratch Interface Guide",
            url: "",
          },
        ],
      },
      {
        id: "lesson-2",
        type: "pdf",
        status: "inComplete",
        link: "'../assets/images/AnnualReport_2025.pdf'",
        title: "Lorem ipsum pellentesque",
        duration: "10 min",
        completed: false,
        task: "Create a Scratch account and explore the different block categories.",
        poster: posterImage,
        resources: [
          {
            title: "Scratch Interface Guide",
            url: "",
          },
          {
            title: "Scratch Interface Guide",
            url: "",
          },
        ],
      },
      {
        id: "lesson-3",
        type: "video",
        status: "inComplete",
        link: "https://www.youtube.com/embed/tasLK8UrE88?si=Cq0dKpW9H8fIMuIQ",
        title: "Lorem ipsum pellentesque",
        duration: "10 min",
        completed: false,
        task: "Create a Scratch account and explore the different block categories.",
        poster: posterImage,
        resources: [
          {
            title: "Scratch Interface Guide",
            url: "",
          },
          {
            title: "Scratch Interface Guide",
            url: "",
          },
        ],
      },
    ],
  },
];
