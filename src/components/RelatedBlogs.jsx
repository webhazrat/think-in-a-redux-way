import { useDispatch, useSelector } from "react-redux";
import RelatedBlog from "./RelatedBlog";
import { useEffect } from "react";
import { fetchRelatedBlogs } from "../slices/relatedBlogs/relatedBlogsSlice";

export default function RelatedBlogs({ currentId, tags }) {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.relatedBlogs);
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ blogId: currentId, tags }));
  }, [dispatch, currentId, tags]);
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {blogs.length > 0 &&
          blogs.map((blog) => <RelatedBlog key={blog.id} blog={blog} />)}
      </div>
    </aside>
  );
}
