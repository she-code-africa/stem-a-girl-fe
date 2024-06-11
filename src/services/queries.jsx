import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const getAllActivities = async () => {
  const activities = await axios.get(`${baseURL}activity`);
  return activities.data.data;
};

export const getActivityCourses = async (activityID) => {
  const activityCourses = await axios.get(
    `${baseURL}course?activityId=${activityID}`
  );
  return activityCourses.data.data;
};

export const getActivityEvents = async (activityID) => {
  const activityEvents = await axios.get(
    `${baseURL}event?activityId=${activityID}`
  );
  return activityEvents.data.data;
};

export const getAllTestimonials = async () => {
  const testimonials = await axios.get(`${baseURL}testimonials`);
  return testimonials.data.data;
};
