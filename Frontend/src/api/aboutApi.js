import API from "./axios";

export const getAbout = () => {
  return API.get("/about");
};