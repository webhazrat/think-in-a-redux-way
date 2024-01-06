export default function Tags({ tags, className }) {
  return (
    <div className={`lws-tags ${className}`}>
      {tags?.length > 0 &&
        tags.map((tag, index) => <span key={index}>#{tag}</span>)}
    </div>
  );
}
