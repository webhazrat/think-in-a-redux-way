import axios from "../../utils/axios";
const getRelatedBlogs = async ({ blogId, tags }) => {
  const limit = 5;
  const query =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${blogId}&_limit=${limit}`
      : `id_ne=${blogId}&_limit=${limit}`;
  const blogs = await axios.get(`/blogs?${query}`);
  return blogs.data;
};
export default getRelatedBlogs;
