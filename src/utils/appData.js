export const navigationMenu = [
  {
    pathname: "Home",
    path: "/",
    isDropdown: false,
    dropdownMenu: [],
  },
  {
    pathname: "Activities",
    path: "/activities",
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
        title: "Robotis",
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
