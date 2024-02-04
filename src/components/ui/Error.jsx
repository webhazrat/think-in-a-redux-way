export default function Error({ message }) {
  return (
    <div className="col-span-12 px-4 py-3 bg-red-50 text-red-500 border-l-2 border-red-500">
      {message}
    </div>
  );
}
