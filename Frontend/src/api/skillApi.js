import axios from "axios";

export const getSkills = async () => {
  return await axios.get("http://localhost:5000/api/skills");
};
