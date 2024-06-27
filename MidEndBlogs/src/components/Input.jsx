// eslint-disable-next-line react/prop-types
function Input({ title, type, placeholder, name }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label>{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="rounded border p-2 focus:outline-none"
      />
    </div>
  );
}

export default Input;
