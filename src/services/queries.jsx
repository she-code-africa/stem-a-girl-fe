import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const getAllActivities = async () => {
  const activities = await axios.get(`${baseURL}activity`);
  return activities.data.data;
};

export const getActivityCourses = async (activityID) => {
  console.log(activityID);
  const activityCourses = await axios.get(
    `${baseURL}course?activity=${activityID}`
  );
  return activityCourses.data.data;
};

export const getActivityEvents = async (activityID) => {
  console.log(activityID);
  const activityEvents = await axios.get(
    `${baseURL}event?activity=${activityID}`
  );
  return activityEvents.data.data;
};

export const getAllTestimonials = async () => {
  const testimonials = await axios.get(`${baseURL}testimonials`);
  return testimonials.data.data;
};

export const getAllSchools = async () => {
  const schools = await axios.get(`${baseURL}school`);
  return schools.data.data;
};

export const getAllImpactStories = async () => {
  const impactStories = await axios.get(`${baseURL}impactStory`);

  return impactStories.data.data;
};
