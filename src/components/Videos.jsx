import Video from "./Video";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchVideos } from "../slices/videos/videosSlice";

export default function Videos() {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px] items-start">
          {isLoading && <p>Loading...</p>}
          {isError && (
            <div className="col-span-12 bg-red-50 p-4 rounded-md text-red-500">
              {error}
            </div>
          )}
          {!isLoading &&
            !isError &&
            videos.length > 0 &&
            videos.map((video) => <Video key={video.id} video={video} />)}
        </div>
      </section>
    </section>
  );
}
