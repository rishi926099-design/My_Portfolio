import API from "./axios";

export const getProjects = async () => {
  const response = await API.get("/projects");
  return response.data;
};
