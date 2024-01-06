import { useEffect } from "react";
import LikeUnlike from "../components/LikeUnlike";
import RelatedVideos from "../components/RelatedVideos";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../slices/video/videoSlice";

export default function Video() {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  console.log({ video });

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {!isLoading && !isError && (
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
              <div className="col-span-full w-full space-y-8 lg:col-span-2">
                <iframe
                  width="100%"
                  className="aspect-video"
                  src={video.link}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div>
                  <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                    {video.title}
                  </h1>
                  <div className="pb-4 flex items-center space-between border-b">
                    <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                      Uploaded on {video.date}
                    </h2>

                    <LikeUnlike />
                  </div>

                  <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                    {video.description}
                  </div>
                </div>
              </div>

              <RelatedVideos currentId={video.id} tags={video.tags} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
