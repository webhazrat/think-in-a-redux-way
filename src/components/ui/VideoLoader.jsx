export default function VideoLoader() {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 max-w-sm w-full mx-auto">
      <div className="animate-pulse">
        <div className="bg-slate-200 h-[172px]"></div>
        <div className="flex flex-row mt-2 gap-2">
          <div className="bg-slate-200 h-6 w-6 rounded-full"></div>
          <div className="flex flex-1 flex-col space-y-3 pt-1">
            <div className="bg-slate-200 h-3 rounded-md"></div>
            <div className="bg-slate-200 h-2 rounded-md"></div>
            <div className="bg-slate-200 h-2 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
