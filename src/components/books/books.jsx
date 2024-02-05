export default function Books({ children }) {
  return (
    <div className="space-y-6 md:space-y-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
