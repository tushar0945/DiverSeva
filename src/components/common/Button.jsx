const variants = {
  primary: "bg-primary text-white hover:bg-blue-700",
  secondary: "bg-secondary text-white",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg font-medium transition
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
