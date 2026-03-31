import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const getAllActivities = async () => {
  const activities = await axios.get(`${baseURL}/activity`);
  return activities.data.data;
};

export const getReports = async () => {
  const programs = await axios.get(`${process.env.REACT_APP_BASE_URL}/reports`);

  return programs.data.data;
};

export const getActivityCourses = async (activityID) => {
  const activityCourses = await axios.get(
    `${baseURL}/course?activity=${activityID}`,
  );
  return activityCourses.data.data;
};

export const getActivityEvents = async (activityID) => {
  const activityEvents = await axios.get(
    `${baseURL}/event?activity=${activityID}`,
  );
  return activityEvents.data.data;
};

export const getAllTestimonials = async () => {
  const testimonials = await axios.get(`${baseURL}/testimonials`);
  return testimonials.data.data;
};

export const getAllSchools = async () => {
  const schools = await axios.get(`${baseURL}/school`);
  return schools.data.data;
};

export const getAllImpactStories = async () => {
  const impactStories = await axios.get(`${baseURL}/impactStory`);

  return impactStories.data.data;
};

// courses
export const getAllCourses = async () => {
  const courses = await axios.get(`${baseURL}/course`);

  return courses.data.data;
};

export const getACourse = async (courseID) => {
  const course = await axios.get(`${baseURL}/course/${courseID}`);
  return course.data.data;
};
//outreach
export const getOutreach = async () => {
  const outreach = await axios.get(`${baseURL}/outreach`);
  return outreach?.data?.data;
};
