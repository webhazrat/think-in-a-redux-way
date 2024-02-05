export default function Input({ label, ...arg }) {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input className="text-input" id={label} {...arg} />
    </>
  );
}
