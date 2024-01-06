import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../slices/blogs/blogsSlice";
import Blog from "./Blog";

export default function Blogs() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { sorted, filtered } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBlogs({ sorted, filtered }));
  }, [dispatch, sorted, filtered]);

  return (
    <main className="post-container" id="lws-postContainer">
      {isLoading && <p>Loading...</p>}
      {isError && <div>{error}</div>}

      {!isLoading &&
        !isError &&
        blogs.length > 0 &&
        blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </main>
  );
}
