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
  {
    pathname: "Sign Up For Our Newsletter",
    path: "#",
    isNewsLetter: true,
  },
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
      "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. ",
    img: interactiveWorkshopImage,
  },
  {
    title: "Collaborative STEM projects",
    description:
      "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. ",
    img: stemProjectsImage,
  },
  {
    title: "Coding bootcamps",
    description:
      "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. ",
    img: codingBootcampImage,
  },
];

export const activities = [
  {
    title: "Coding workshops",
    image: codingHeroImage,
    description: "Coding workshops",
  },
  {
    title: "Game Development",
    image: gameDevHeroImage,
    description: "Coding workshops",
  },
  {
    title: "Robotics (Arduino, Raspberry Pi)",
    image: roboticsHeroImage,
    description: "Coding workshops",
  },
];

export const faqs = [
  {
    title: "What is the SheCodeAfrica STEM-A-GIRL program about?",
    content:
      "The She Code Africa STEM Club is an initiative aimed at empowering girls to pursue careers in Science, Technology, Engineering, and Math (STEM).",
  },
  {
    title: "Who can join the STEM Club?",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veritatis sint voluptate voluptatibus nesciunt voluptas cumque quod itaque inventore tempore. Reiciendis molestiae eligendi laboriosam? Quaerat, repudiandae possimus. Laborum, atque nam!",
  },
  {
    title: "What kind of activities can I expect?",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veritatis sint voluptate voluptatibus nesciunt voluptas cumque quod itaque inventore tempore. Reiciendis molestiae eligendi laboriosam? Quaerat, repudiandae possimus. Laborum, atque nam!",
  },
  {
    title: "Do I need prior experience in STEM?",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veritatis sint voluptate voluptatibus nesciunt voluptas cumque quod itaque inventore tempore. Reiciendis molestiae eligendi laboriosam? Quaerat, repudiandae possimus. Laborum, atque nam!",
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
