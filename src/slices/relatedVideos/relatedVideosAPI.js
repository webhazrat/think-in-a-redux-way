import axios from "../../utils/axios";
const getRelatedVideos = async ({ videoId, tags }) => {
  const limit = 5;
  const query =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${videoId}&_limit=${limit}`
      : `id_ne=${videoId}&_limit=${limit}`;
  const videos = await axios.get(`/videos?${query}`);
  return videos.data;
};
export default getRelatedVideos;
