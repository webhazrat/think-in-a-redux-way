export default function Checkbox({ label, ...arg }) {
  return (
    <>
      <input id={label} type="checkbox" {...arg} className="w-4 h-4" />
      <label htmlFor={label} className="ml-2 text-sm">
        {label}
      </label>
    </>
  );
}
