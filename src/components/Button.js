const nothing = () => {
  return;
};

const Button = ({
  onClick,
  children,
  bgcolor = "bg-fontPrimary",
  color = "text-white",
  round = "rounded-md",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 font-bold px-7 py-3 ${bgcolor} ${round} ${color}`}
    >
      {children}
    </button>
  );
};

export default Button;
