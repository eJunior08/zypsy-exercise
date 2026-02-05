import { PropsWithChildren, ReactNode, ButtonHTMLAttributes } from "react";
import { Heading1 } from "../Typography";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const baseStyles = "rounded h-[40px] flex items-center justify-center gap-2";

  const paddingStyles = icon
    ? "pl-[24px] pr-[16px] py-[8px]"
    : "px-[24px] py-[8px]";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-white text-primary border border-primary",
  };

  return (
    <button
      className={`${baseStyles} ${paddingStyles} ${variantStyles[variant]} ${className}`.trim()}
      {...rest}
    >
      <Heading1>{children}</Heading1>
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
}
