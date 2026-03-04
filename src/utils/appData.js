import {
  codingBootcampImage,
  codingHeroImage,
  gameDevHeroImage,
  girlChild,
  interactiveWorkshopImage,
  roboticsHeroImage,
  stemProjectsImage,
  upcomingEventPhoto,
} from "../assets/images";

export const navigationMenu = [
  {
    pathname: "Home",
    path: "/",
    isDropdown: false,
    dropdownMenu: [],
  },
  {
    pathname: "Activities",
    path: "#",
    isDropdown: true,
    dropdownMenu: [
      {
        title: "Game Development",
        url: "/activities/game-development",
      },
      {
        title: "Coding",
        url: "/activities/coding",
      },
      {
        title: "Robotics",
        url: "/activities/robotics",
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
    pathname: "Outreach",
    path: "https://drive.google.com/drive/folders/10YrxGw17PeiTtYPAy-qMlko4C0cCtS48",
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
    title: "Coding",
    image: codingHeroImage,
    link: "/activities/coding",
  },
  {
    title: "Game Development",
    image: gameDevHeroImage,
    link: "/activities/game-development",
  },
  {
    title: "Robotics (Arduino, Raspberry Pi)",
    image: roboticsHeroImage,
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
    title: "What is the SheCodeAfrica STEM-A-GIRL Program about?",
    content:
      "The She Code Africa STEM-A-Girl Program is an initiative aimed at empowering girls to pursue careers in Science, Technology, Engineering, and Math (STEM).",
    list: false,
  },
  {
    title: "Who can join the STEM Club?",
    content:
      "The STEM Club is open to African girls aged 10 - 21, regardless of grade level. The club is designed to be inclusive and welcoming to female secondary students of all backgrounds and interests.",
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
      "No prior experience in STEM is necessary to join the club. She Code Africa’s STEM club is designed to be accessible and engaging for female students of all skill levels aged 10 - 21. Club members will have the opportunity to learn and develop STEM skills in a supportive and encouraging environment.",
    list: false,
  },
];

export const stats = [
  {
    title: "Schools Visited",
    stat: "25",
  },
  {
    title: "States",
    stat: "7",
  },
  {
    title: "Students Impacted",
    stat: "1700+",
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
