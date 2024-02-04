export default function RelatedVideoLoader() {
  return (
    <div className="animate-pulse w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none bg-slate-200"></div>
      <div className="flex flex-col w-full gap-3">
        <div className="bg-slate-200 h-3 rounded-md"></div>
        <div className="bg-slate-200 h-2 rounded-md"></div>
        <div className="bg-slate-200 h-2 rounded-md"></div>
      </div>
    </div>
  );
}
