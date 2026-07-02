import API from "./axios";

export const getCertifications = () => {
  return API.get("/certifications");
};
