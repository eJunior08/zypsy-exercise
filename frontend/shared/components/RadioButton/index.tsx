import { InputHTMLAttributes } from "react";
import { Body1 } from "../Typography";

type RadioButtonProps = {
  label: string;
  checked?: boolean;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function RadioButton({
  label,
  checked = false,
  className = "",
  ...rest
}: RadioButtonProps) {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer ${className}`.trim()}
    >
      <input type="radio" checked={checked} className="sr-only" {...rest} />
      <div className="relative flex items-center justify-center w-[20px] h-[20px] rounded-[26px] border border-accent">
        {checked && (
          <div className="w-[12px] h-[12px] rounded-[16px] bg-primary" />
        )}
      </div>
      <Body1 className="text-foreground !text-[12px] !leading-[20px]">
        {label}
      </Body1>
    </label>
  );
}
