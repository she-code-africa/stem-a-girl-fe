import {
  cardPhoto,
  cardPhoto2,
  cardPhoto3,
  cardPhoto4,
  cardPhoto5,
  cardPhoto6,
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
  // {
  //   pathname: "Outreach",
  //   path: "/outreach",
  //   isDropdown: true,
  //   dropdownMenu: [
  //     {
  //       title: "Outreach",
  //       url: "#",
  //     },
  //     {
  //       title: "Outreach",
  //       url: "#",
  //     },
  //     {
  //       title: "Outreach",
  //       url: "#",
  //     },
  //   ],
  // },
];

export const aboutUsLinks = [
  {
    pathname: "SCA Website",
    path: "https://shecodeafrica.org/",
  },
  {
    pathname: "F.A.Q",
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
  // {
  //   pathname: "Recent Outreach",
  //   path: "#",
  // isNewsLetter:false
  // },
  {
    pathname: "Contact Us",
    path: "/contact-us",
    isNewsLetter: false,
  },
  {
    pathname: "Join Our Slack Community",
    path: "https://bit.ly/joinshecodeafrica",
    isNewsLetter: false,
  },
  // {
  //   pathname: "Sign Up For Our Newsletter",
  //   path: "#",
  //   isNewsLetter: true,
  // },
];

export const coursesSlider = [
  {
    picture: cardPhoto,
    cardHeading: "Getting Started with Scratch",
    cardParagraph:
      "Kickstart your coding journey with this beginner’s guide. Learn how to navigate the Scratch interface and create simple projects.",
    index: 1,
  },
  {
    picture: cardPhoto4,
    cardHeading: "Coding Academy",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 2,
  },
  {
    picture: cardPhoto2,
    cardHeading: "Scratch Tutorial Videos",
    cardParagraph:
      "Watch our collection of step-by-step video tutorials, designed to help you master Scratch coding concepts at your own pace.",
    index: 3,
  },
  {
    picture: cardPhoto5,
    cardHeading: "Coding Academy",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 4,
  },

  {
    picture: cardPhoto3,
    cardHeading: "Coding for Kids",
    cardParagraph:
      "Stuck for ideas? Browse through our library of project ideas and get inspired to create your own unique Scratch projects",
    index: 5,
  },

  {
    picture: cardPhoto6,
    cardHeading: "Coding Academy",
    cardParagraph:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    index: 6,
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

export const testimonialSliderContent = [
  {
    text: "“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”",
  },
  {
    text: "“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”",
  },
  {
    text: "“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”",
  },
];

export const clubActivities = [
  {
    title: "Interactive workshops",
    description:
      "We offer interactive workshops and guided learning sessions for girls aged 10 to 21 in a supportive environment.",
    img: interactiveWorkshopImage,
  },
  {
    title: "Collaborative STEM projects",
    description:
      "Our projects invite girls aged 10 to 21 to participate in collaborative STEM activities, offering hands-on learning experiences.",
    img: stemProjectsImage,
  },
  {
    title: "Coding bootcamps",
    description:
      "Dive into our coding bootcamps, where girls aged 10 to 21 can engage in interactive and hands-on learning experiences.",
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

export const schools = [];
