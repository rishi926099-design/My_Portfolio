import API from "./axios";

export const sendContact = (data) => {
  return API.post("/contact", data);
};