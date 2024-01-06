import Blogs from "../components/Blogs";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <section className="wrapper">
        <Sidebar />
        <Blogs />
      </section>
    </>
  );
}
