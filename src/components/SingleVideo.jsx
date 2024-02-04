import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../features/api/apiSlice";
import RelatedVideos from "./RelatedVideos";
import VideoDescription from "./VideoDescription";
import VideoPlayer from "./VideoPlayer";
import PlayerLoader from "./ui/PlayerLoader";
import DescriptionLoader from "./ui/DescriptionLoader";
import Error from "./ui/Error";
export default function SingleVideo() {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

  let content = null;
  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error occur" />;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <>
        <VideoPlayer link={video.link} title={video.title} />
        <VideoDescription video={video} />
      </>
    );
  }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          {video?.id && <RelatedVideos id={video.id} title={video.title} />}
        </div>
      </div>
    </section>
  );
}
