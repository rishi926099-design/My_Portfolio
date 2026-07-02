import API from "./axios";

export const sendMessage = (message) => {
  return API.post("/chat", { message });
};
