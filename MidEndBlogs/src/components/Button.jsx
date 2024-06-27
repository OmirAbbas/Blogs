// eslint-disable-next-line react/prop-types
function Button({ children, className = "" }) {
  return (
    <button className={`bg-primary text-center text-white ${className}`}>
      {children}
    </button>
  );
}

export default Button;
