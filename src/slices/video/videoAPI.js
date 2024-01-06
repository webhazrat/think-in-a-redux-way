import axios from "../../utils/axios";
const getVideo = async (videoId) => {
  const video = await axios.get(`/videos/${videoId}`);
  return video.data;
};
export default getVideo;
