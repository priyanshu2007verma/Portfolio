interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-7 py-3 font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-violet-600 hover:bg-violet-500 hover:scale-105"
          : "border border-violet-500 hover:bg-violet-600 hover:scale-105"
      }`}
    >
      {children}
    </button>
  );
}