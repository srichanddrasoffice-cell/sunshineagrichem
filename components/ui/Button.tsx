import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full px-5 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunshine-green/40",
        variant === "primary"
          ? "bg-sunshine-green text-white hover:bg-sunshine-greenDark"
          : "bg-sunshine-orange text-white shadow-sm hover:bg-[#e58f00]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
