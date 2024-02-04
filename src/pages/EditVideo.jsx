import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderNavigation from "../components/HeaderNavigation";
import { useGetVideoQuery } from "../features/api/apiSlice";
import Error from "../components/ui/Error";
import EditVideoForm from "../components/EditVideoForm";
import EditFormLoader from "../components/ui/EditFormLoader";

export default function EditVideo() {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

  let content = null;
  if (isLoading) {
    content = <EditFormLoader />;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error occur!" />;
  }

  if (!isLoading && !isError && video?.id) {
    content = <EditVideoForm video={video} />;
  }

  return (
    <>
      <HeaderNavigation />
      {content}
      <Footer />
    </>
  );
}
