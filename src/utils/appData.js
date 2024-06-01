import {
  cardPhoto,
  cardPhoto2,
  cardPhoto3,
  cardPhoto4,
  cardPhoto5,
  cardPhoto6,
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
    path: "/outreach",
    isDropdown: true,
    dropdownMenu: [
      {
        title: "Outreach",
        url: "#",
      },
      {
        title: "Outreach",
        url: "#",
      },
      {
        title: "Outreach",
        url: "#",
      },
    ],
  },
];

export const aboutUsLinks = [
  {
    pathname: "SCA Website",
    path: "https://shecodeafrica.org/",
  },
  {
    pathname: "F.A.Q",
    path: "#",
  },
  {
    pathname: "Code of Conduct",
    path: "#",
  },
  {
    pathname: "Privacy Policy",
    path: "#",
  },
  {
    pathname: "Terms and Conditions",
    path: "#",
  },
];

export const communityLinks = [
  {
    pathname: "Recent Outreach",
    path: "#",
  },
  {
    pathname: "Contact Us",
    path: "#",
  },
  {
    pathname: "Join Our Slack Community",
    path: "#",
  },
  {
    pathname: "Sign Up For Our Newsletter",
    path: "#",
  },
  {
    pathname: "Follow Us On Social Media",
    path: "#",
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
