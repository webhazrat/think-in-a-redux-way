import HeaderNavigation from "../components/HeaderNavigation";
import Footer from "../components/Footer";
import Videos from "../components/Videos";
import VideoItem from "../components/VideoItem";
import { useGetVideosQuery } from "../features/api/apiSlice";
import VideoLoader from "../components/ui/VideoLoader";
import Error from "../components/ui/Error";

export default function Home() {
  const { data: videos, isLoading, isError } = useGetVideosQuery();

  let content = null;
  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No video found!" />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <VideoItem key={video.id} video={video} />);
  }

  return (
    <>
      <HeaderNavigation />
      <Videos>{content}</Videos>
      <Footer />
    </>
  );
}
