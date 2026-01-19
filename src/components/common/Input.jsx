const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-muted">{label}</label>}
      <input
        {...props}
        className="
          px-3 py-2 border rounded-md
          focus:outline-none focus:ring-2 focus:ring-primary
        "
      />
    </div>
  );
};

export default Input;
