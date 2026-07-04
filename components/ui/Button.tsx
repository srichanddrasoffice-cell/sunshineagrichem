import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full px-5 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500",
        variant === "primary"
          ? "bg-emerald-600 text-white hover:bg-emerald-700"
          : "bg-white/80 text-slate-900 shadow-sm hover:bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
