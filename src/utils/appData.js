import {
  codingBootcampImage,
  codingFromScratchCardImg,
  gameDevCardImg,
  girlChild,
  interactiveWorkshopImage,
  roboticsCardImg,
  stemProjectsImage,
  upcomingEventPhoto,
} from "../assets/images";
import { FaCode, FaGamepad, FaRobot } from "react-icons/fa6";

export const navigationMenu = [
  {
    pathname: "Courses",
    path: "#",
    isDropdown: true,
    dropdownMenu: [
      {
        title: "Coding from Scratch",
        url: "/activities/coding",
        icon: FaCode,
      },
      {
        title: "Game Development",
        url: "/activities/game-development",
        icon: FaGamepad,
      },
      {
        title: "Robotics",
        url: "/activities/robotics",
        icon: FaRobot,
      },
    ],
  },
  {
    pathname: "STEM Club",
    path: "/stem-clubs",
    isDropdown: false,
    dropdownMenu: [],
  },
  {
    pathname: "Outreaches",
    path: "https://drive.google.com/drive/folders/10YrxGw17PeiTtYPAy-qMlko4C0cCtS48",
    isDropdown: false,
    dropdownMenu: [],
  },
  {
    pathname: "Contact us",
    path: "/contact-us",
    isDropdown: false,
    dropdownMenu: [],
  },
];

export const getInvolvedLinks = [
  {
    pathname: "Donate To A Cause",
    path: "https://shecodeafrica.org/donate",
  },
  {
    pathname: "Partner With Us",
    path: "https://shecodeafrica.org/donate-partner",
  },
  {
    pathname: "Start An S.C.A Chapter",
    path: "https://shecodeafrica.org/chapters",
  },
  {
    pathname: "Summit",
    path: "https://summit.shecodeafrica.org/",
  },
];

export const aboutUsLinks = [
  {
    pathname: "Meet The Team",
    path: "https://shecodeafrica.org/team",
  },
  {
    pathname: "FAQs",
    path: "https://shecodeafrica.org/faq",
  },
  {
    pathname: "Code of Conduct",
    path: "https://shecodeafrica.org/code-of-conduct",
  },
  {
    pathname: "Privacy Policy",
    path: "https://shecodeafrica.org/privacy",
  },
  {
    pathname: "Terms and Conditions",
    path: "https://shecodeafrica.org/terms",
  },
];

export const communityLinks = [
  {
    pathname: "Upcoming Events",
    path: "https://shecodeafrica.org/events",
    isNewsLetter: false,
  },

  {
    pathname: "Join Our Community",
    path: "https://bit.ly/joinshecodeafrica",
    isNewsLetter: false,
  },
];

export const upcomingEventsSlider = [
  {
    picture: upcomingEventPhoto,
    cardHeading: "Stem Club workshop",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 1,
  },
  {
    picture: upcomingEventPhoto,
    cardHeading: "Stem Club workshop",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 2,
  },
  {
    picture: upcomingEventPhoto,
    cardHeading: "Stem Club workshop",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 3,
  },
  {
    picture: upcomingEventPhoto,
    cardHeading: "Stem Club workshop",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 4,
  },

  {
    picture: upcomingEventPhoto,
    cardHeading: "Stem Club workshop",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 5,
  },

  {
    picture: upcomingEventPhoto,
    cardHeading: "Stem Club workshop",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 6,
  },
];

export const clubActivities = [
  {
    title: "Interactive Workshops",
    description: "Learn basic programming languages and build your own robots!",
    img: interactiveWorkshopImage,
  },
  {
    title: "Routine Club Meetups",
    description:
      "Our STEM Club meet-ups are designed to be engaging, educational, and fun. Each meeting offers a variety of activities to spark your curiosity and deepen your understanding of STEM.",
    img: stemProjectsImage,
  },
  {
    title: "Group Discussions and Brainstorming",
    description:
      "Plan projects, brainstorm ideas, and solve problems with your peers.",
    img: codingBootcampImage,
  },
];

export const activities = [
  {
    title: "Coding with Scratch",
    image: codingFromScratchCardImg,
    description:
      "Start your programming journey using Scratch, a fun and visual coding language that helps you build animations, games, and stories, with no prior experience needed.",
    link: "/activities/coding",
  },
  {
    title: "Game Development",
    image: gameDevCardImg,
    description:
      "Turn your creativity into action! Learn how games are built from the ground up and create your own playable projects using simple, beginner-friendly scratch tools.",
    link: "/activities/game-development",
  },
  {
    title: "Robotics (Arduino, Raspberry Pi)",
    image: roboticsCardImg,
    description:
      "Step into the future by building and programming simple robots. Discover how software and hardware come together to solve real-world problems.",
    link: "/activities/robotics",
  },
];

export const codingHeroSubContent = [
  "New to coding? Our beginner's guide will help you get started",
  "Need inspiration? Browse our STEM club creations",
  "Stuck on a project? Ask our experts and mentors for support (Add form for enquiries)",
];

export const gameDevelopmentHeroSubContent = [
  "New to game development? Our beginner's guide will help you get started",
  "Need inspiration? Browse our STEM club creations",
  "Stuck on a project? Ask our experts and mentors for support",
];

export const roboticsHeroSubContent = [
  "New to robotics? Our beginner's guide will help you get started",
  "Need inspiration? Browse our STEM club creations",
  "Stuck on a project? Ask our experts and mentors for support",
];

export const faqs = [
  {
    title: "What is the She Code Africa STEM-A-GIRL Program about?",
    content:
      "The She Code Africa STEM-A-Girl Program is an initiative aimed at empowering girls to pursue careers in Science, Technology, Engineering, and Math (STEM).",
    list: false,
  },
  {
    title: "What is the main goal of the STEM-A-Girl initiative?",
    content:
      "The goal is to increase awareness, interest, and participation of young African girls in STEM by providing them with the resources, support, and inspiration they need to build confidence and develop relevant skills for the future.",
    list: false,
  },
  {
    title: "Is this initiative only for students?",
    content:
      "While the initiative is focused on students aged 10-21, it also engages educators, parents, and community stakeholders to foster a supportive ecosystem for girls in STEM.",
    list: false,
  },
  {
    title: "Is the learning content suitable for beginners?",
    content:
      "Yes! All content is designed to be beginner-friendly, age-appropriate, and self-paced to ensure girls with little or no prior experience can actively participate and learn.",
    list: false,
  },
  {
    title: "Who can join the STEM Club?",
    content:
      "The STEM Club is open to African girls aged 10 - 21, regardless of grade level. The club is designed to be inclusive and welcoming to female secondary students of all backgrounds and interests. For specific meeting times, location details, and information about upcoming activities, please check with your school administration or the designated STEM Club coordinator.",
    list: false,
  },
  {
    title: "What kind of activities can I expect?",
    content: [
      "Hands-on STEM activities, such as building robots, creating coding projects, and conducting science experiments.",
      "Workshops led by industry professionals and educators.",
      "Opportunities to participate in STEM competitions and events.",
      "Collaborative projects and team-building activities.",
    ],
    list: true,
  },
  {
    title: "Do I need prior experience in STEM?",
    content:
      "No prior experience in STEM is necessary to join the club. She Code Africa’s STEM club is designed to be accessible and engaging for female students of all skill levels aged 10 – 21. Club members will have the opportunity to learn and develop STEM skills in a supportive and encouraging environment.",
    list: false,
  },
  {
    title: "How often does the STEM Club meet?",
    content:
      "Meeting frequency may vary depending on the school and location. Check with your local STEM Club coordinator for the specific schedule.",
    list: false,
  },
  {
    title: "Can I still participate if my school doesn’t have a STEM Club?",
    content:
      "Yes! If your school doesn’t currently host a STEM Club, you can express interest through our website or contact She Code Africa directly to learn how to bring the program to your school or join a nearby club.",
    list: false,
  },
];

export const stats = [
  {
    title: "Girls reached across 8 Nigerian States",
    stat: "3503+",
  },
  {
    title: "STEM clubs launched for continued learning.",
    stat: "7",
  },
  {
    title: "Students trained in workshops on Coding & Robotics ",
    stat: "250+",
  },
];

export const impactStories = [
  {
    image: girlChild,
    name: "Mary Ademola",
    school: "FGGC Abuja",
    story:
      " Before joining the STEM Club, I never thought I could understand or enjoy engineering. The workshops and mentorship I received changed my perspective entirely. Now, I'm planning to pursue a degree in mechanical engineering and dream of creating innovative solutions to everyday problems.",
  },
  {
    image: girlChild,
    name: "Mary Ademola",
    school: "FGGC Abuja",
    story:
      " Before joining the STEM Club, I never thought I could understand or enjoy engineering. The workshops and mentorship I received changed my perspective entirely. Now, I'm planning to pursue a degree in mechanical engineering and dream of creating innovative solutions to everyday problems.",
  },
  {
    image: girlChild,
    name: "Mary Ademola",
    school: "FGGC Abuja",
    story:
      " Before joining the STEM Club, I never thought I could understand or enjoy engineering. The workshops and mentorship I received changed my perspective entirely. Now, I'm planning to pursue a degree in mechanical engineering and dream of creating innovative solutions to everyday problems.",
  },
  {
    image: girlChild,
    name: "Mary Ademola",
    school: "FGGC Abuja",
    story:
      " Before joining the STEM Club, I never thought I could understand or enjoy engineering. The workshops and mentorship I received changed my perspective entirely. Now, I'm planning to pursue a degree in mechanical engineering and dream of creating innovative solutions to everyday problems.",
  },
  {
    image: girlChild,
    name: "Mary Ademola",
    school: "FGGC Abuja",
    story:
      " Before joining the STEM Club, I never thought I could understand or enjoy engineering. The workshops and mentorship I received changed my perspective entirely. Now, I'm planning to pursue a degree in mechanical engineering and dream of creating innovative solutions to everyday problems.",
  },
  {
    image: girlChild,
    name: "Mary Ademola",
    school: "FGGC Abuja",
    story:
      " Before joining the STEM Club, I never thought I could understand or enjoy engineering. The workshops and mentorship I received changed my perspective entirely. Now, I'm planning to pursue a degree in mechanical engineering and dream of creating innovative solutions to everyday problems.",
  },
];
