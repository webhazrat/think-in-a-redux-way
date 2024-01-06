import axios from "../../utils/axios";
const getBlogs = async (sorted, filtered) => {
  let queryString = "";
  if (sorted === "newest") {
    queryString += `_sort=createdAt&_order=desc`;
  }
  if (sorted === "most_liked") {
    queryString += `_sort=likes&_order=desc`;
  }
  if (filtered === "Saved") {
    queryString += `&isSaved=true`;
  }
  const blogs = await axios.get(`/blogs?${queryString}`);
  return blogs.data;
};
export default getBlogs;
