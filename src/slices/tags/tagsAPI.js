import axios from "../../utils/axios";
const getTags = async () => {
  const tags = await axios.get("/tags");
  return tags.data;
};
export default getTags;
