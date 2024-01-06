import { Link } from "react-router-dom";
import Tags from "./Tags";

export default function RelatedBlog({ blog }) {
  return (
    <div className="card">
      <Link to={`/blog/${blog.id}`}>
        <img src={blog.image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${blog.id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {blog.title}
        </Link>
        <Tags className={"mb-0"} tags={blog.tags} />
        <p>{blog.createdAt}</p>
      </div>
    </div>
  );
}
