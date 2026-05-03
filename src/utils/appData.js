import {
  codingBootcampImage,
  codingFromScratchCardImg,
  gameDevCardImg,
  girlChild,
  interactiveWorkshopImage,
  roboticsCardImg,
  stemProjectsImage,
  upcomingEventPhoto,
  successStoryImg1,
  successStoryImg2,
  stemClubStudents1,
  stemClubStudents2,
  stemClubStudents3,
  outreachRivers,
  outreachOsun,
  outreachOgun,
  outreachLagos,
  outreachFCT,
  outreachDelta,
  outreachAbia,
  outreachKaduna,
} from "../assets/images";
import { FaCode, FaGamepad, FaRobot } from "react-icons/fa6";

export const navigationMenu = [
  {
    pathname: "Courses",
    path: "/courses",
    isDropdown: true,
    dropdownMenu: [
      {
        title: "Coding with Scratch",
        url: "/course/coding",
        icon: FaCode,
      },
      {
        title: "Game Development",
        url: "/course/game-development",
        icon: FaGamepad,
      },
      {
        title: "Robotics",
        url: "/course/robotics",
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
    pathname: "Outreach",
    path: "/outreach",
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
    title: "Robotics (Arduino)",
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

export const successStoriesSlides = [
  {
    image: successStoryImg1,
    testimonials: [
      {
        name: "School Principal, Queen Amina Collage",
        location: "Kakuri, Kaduna State",
        quote:
          "Some of them have never participated this actively in any extracurricular activity. STEM-A-Girl has shown them that their dreams can be bigger.",
      },
      {
        name: "Participant, Federal Government Girls' College Abuloma,",
        location: "Port Harcourt, Rivers State",
        quote:
          "I loved the outreach and the fact that I could ask questions I had in mind. This session has given me more clarity on what I want to do in the future.",
      },
    ],
  },
  {
    image: successStoryImg2,
    testimonials: [
      {
        name: "Participant, Top Flight College, ",
        location: "Gbagada, Lagos",
        quote:
          "I used to hear that only smart people should go to science class. But today I know that's not true. Anyone can do science if they're interested and dedicated.",
      },
      {
        name: "Teacher and Club Facilitator, Government Model Secondary School,",
        location: "Asaba, Delta State ",
        quote:
          "The STEM-A-Girl Outreach gave me tools and motivation to support these girls beyond the classroom. Now, I'm not just teaching, I'm mentoring future innovators.",
      },
    ],
  },
];

export const getInvolvedBulletPoints = [
  "Know a girl curious about STEM? Share this platform with her.",
  "Take a Course, it is completely free",
  "Spread the Word",
];

export const stemClubSchools = [
  {
    name: "Methodist Comprehensive College, Sagamu, Ogun State",
    isPink: false,
  },
  { name: "SOS Children's Villages School, Isolo, Lagos State", isPink: true },
  {
    name: "Government Model Secondary School, Asaba, Delta State",
    isPink: true,
  },
  { name: "Gates Academy, Asaga Ohafia, Abia State", isPink: false },
  { name: "Queen Amina College, Kakuri, Kaduna State", isPink: true },
];

export const stemClubActivitiesCards = [
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

export const stats = [
  {
    title: "Girls reached across 8 Nigerian cities",
    stat: "3503+",
  },
  {
    title: "STEM clubs launched for continued learning.",
    stat: "5",
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

export const outreachStates = [
  {
    state: "Ogun State",
    description: "Some Text here",
    date: "August, 2025",
    image: outreachOgun,
    driveLink:
      "https://drive.google.com/drive/folders/1ZU6kN-PhnXWB4cTL2VlDUSxgFYu6_UDn?usp=drive_link",
  },
  {
    state: "Lagos State",
    description: "Some Text here",
    date: "March 2024",
    image: outreachLagos,
    driveLink:
      "https://drive.google.com/drive/folders/1CKfQkfU-T1j2MKW4g5Jt8qUj4D3p2u5h?usp=sharing",
  },
  {
    state: "Osun State",
    description: "Some Text here",
    date: "February 2023",
    image: outreachOsun,
    driveLink:
      "https://drive.google.com/drive/folders/1klJJnNMBGs9PcD99bV6cUnb4dd6FFCMX?usp=sharing",
  },
  {
    state: "FCT",
    description: "Some Text here",
    date: "15/01/2024",
    image: outreachFCT,
    driveLink:
      "https://drive.google.com/drive/folders/1TjS2GWvcwwFt61Bbka0tLiJRWsx5Nzua?usp=sharing",
  },
  {
    state: "Rivers State",
    description: "Some Text here",
    date: "February 2025",
    image: outreachRivers,
    driveLink:
      "https://drive.google.com/drive/folders/1KV5y-6iTqbMyuXn8NSAbakmc4KQn_8rI?usp=sharing",
  },
  {
    state: "Delta State",
    description: "Some Text here",
    date: "April 2025",
    image: outreachDelta,
    driveLink:
      "https://drive.google.com/drive/folders/1p4PodzxctLzbSEpVwKRfdUs9RR0Ws2kY?usp=sharing",
  },
  {
    state: "Abia State",
    description: "Some Text here",
    date: "May 2025",
    image: outreachAbia,
    driveLink:
      "https://drive.google.com/drive/folders/12gBpoSJt0-VZq7MfGagJhbbqBn7c17CT?usp=sharing",
  },
  {
    state: "Kaduna State",
    description: "Some Text here",
    date: "May 2025",
    image: outreachKaduna,
    driveLink:
      "https://drive.google.com/drive/folders/1nW033SAF7oVt-xPcr1lR9Z9aUXfCTc0b",
  },
];

export const outreachApproach = [
  {
    title: "Awareness Seminar",
    description: "Interactive sessions that showcase STEM career possibilities",
  },
  {
    title: "Hands-on Coding Workshops",
    description: "Introducing students to programming through Scratch",
  },
  {
    title: "Sustainable STEM Clubs/ Donations",
    description: "Ensuring continued learning beyond our initial engagement",
  },
  {
    title: "Exciting Robotics Experience",
    description: "Building simple Arduino robots",
  },
];
