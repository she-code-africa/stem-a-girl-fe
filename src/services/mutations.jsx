import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const makeEnquiry = async (enquiryData) => {
  const enquiryResponse = await axios.post(`${baseURL}/enquiry`, enquiryData);
  return enquiryResponse.data;
};
