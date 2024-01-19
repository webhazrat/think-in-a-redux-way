import JobBoard from "../components/JobBoard";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        <JobBoard />
      </div>
    </>
  );
}
