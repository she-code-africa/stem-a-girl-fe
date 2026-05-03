import CodingPage from "./activities/coding/page";
import CodePlaygroundPage from "./code-playground/page";

import { lazy } from "react";

const HomePage = lazy(() => import("./home/page"));
const OutreachPage = lazy(() => import("./outreach/page"));
const StemClubs = lazy(() => import("./stem-clubs/page"));
const ContactUsPage = lazy(() => import("./contact-us/page"));
const CoursePage = lazy(() => import("./activities/CoursePage"));
const Courses = lazy(() => import("./activities"));

export {
  HomePage,
  OutreachPage,
  StemClubs,
  CodingPage,
  ContactUsPage,
  CodePlaygroundPage,
  Courses,
  CoursePage,
};
