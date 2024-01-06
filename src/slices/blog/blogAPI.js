import axios from "../../utils/axios";
export const getBlog = async (blogId) => {
  const blog = await axios.get(`/blogs/${blogId}`);
  return blog.data;
};

export const likeBlog = async (blogId, likes) => {
  const blog = await axios.patch(
    `/blogs/${blogId}`,
    {
      likes: likes + 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return blog.data;
};

export const saveBlog = async (blogId, save) => {
  const blog = await axios.patch(
    `/blogs/${blogId}`,
    {
      isSaved: !save,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return blog.data;
};
