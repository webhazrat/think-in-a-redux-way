import { useDispatch, useSelector } from "react-redux";
import RelatedVideo from "./RelatedVideo";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../slices/relatedVideos/relatedVideosSlice";

export default function RelatedVideos({ currentId, tags }) {
  console.log({ currentId, tags });
  const dispatch = useDispatch();
  const { videos, isLoading, isError } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ videoId: currentId, tags }));
  }, [dispatch, currentId, tags]);

  console.log({ videos, isLoading, isError });
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {!isLoading &&
        !isError &&
        videos.length > 0 &&
        videos.map((video) => <RelatedVideo key={video.id} video={video} />)}
    </div>
  );
}
