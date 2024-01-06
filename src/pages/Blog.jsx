import { useDispatch, useSelector } from "react-redux";
import GoHome from "../components/GoHome";
import RelatedBlogs from "../components/RelatedBlogs";
import { useEffect } from "react";
import { fetchBlog, liked, saved } from "../slices/blog/blogSlice";
import { useParams } from "react-router-dom";
import Tags from "../components/Tags";

export default function Blog() {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const { blog, isLoading, isError } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  const handleLike = () => {
    dispatch(liked({ blogId: blog.id, likes: blog.likes }));
  };

  const handleSave = () => {
    dispatch(saved({ blogId: blog.id, save: blog.isSaved }));
  };

  return (
    <>
      <GoHome />
      {!isLoading && !isError && (
        <section className="post-page-container">
          <main className="post">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-md"
              id="lws-megaThumb"
            />
            <div>
              <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                {blog.title}
              </h1>
              <Tags tags={blog.tags} />
              <div className="btn-group">
                <button
                  className="like-btn"
                  id="lws-singleLinks"
                  onClick={handleLike}
                >
                  <i className="fa-regular fa-thumbs-up"></i> {blog.likes}
                </button>
                <button
                  className={`${blog.isSaved && "active"} save-btn`}
                  id="lws-singleSavedBtn"
                  onClick={handleSave}
                >
                  <i className="fa-regular fa-bookmark"></i> Saved
                </button>
              </div>
              <div className="mt-6">
                <p>{blog.description}</p>
              </div>
            </div>
          </main>
          <RelatedBlogs currentId={blog.id} tags={blog.tags} />
        </section>
      )}
    </>
  );
}
