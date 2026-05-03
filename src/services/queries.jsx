import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;


export const getReports = async () => {
  const programs = await axios.get(
    `${process.env.REACT_APP_BASE_URL}api/reports`,
  );

  return programs.data.data;
};


export const getAllTestimonials = async () => {
  const testimonials = await axios.get(`${baseURL}api/testimonials`);
  return testimonials.data.data;
};


// courses
export const getAllCourses = async () => {
  const courses = await axios.get(`${baseURL}api/course`);

  return courses.data.data;
};

export const getACourse = async (courseID) => {
  const course = await axios.get(`${baseURL}api/course/${courseID}`);
  return course.data.data;
};
//outreach
export const getOutreach = async () => {
  const outreach = await axios.get(`${baseURL}api/outreach`);
  return outreach?.data?.data;
};
