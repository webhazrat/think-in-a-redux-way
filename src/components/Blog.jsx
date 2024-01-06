import { Link } from "react-router-dom";
import Tags from "./Tags";

export default function Blog({ blog }) {
  return (
    <div className="lws-card">
      <Link to={`/blog/${blog.id}`}>
        <img src={blog.image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{blog.createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i> {blog.likes}
          </p>
        </div>
        <Link to={`/blog/${blog.id}`} className="lws-postTitle">
          {blog.title}
        </Link>
        <Tags tags={blog.tags} />
        {blog.isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
      </div>
    </div>
  );
}
