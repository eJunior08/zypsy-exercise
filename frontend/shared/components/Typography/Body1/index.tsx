import { PropsWithChildren } from "react";

type Body1Props = PropsWithChildren<{
  className?: string;
}>;

export function Body1({ children, className = "" }: Body1Props) {
  return (
    <p className={`font-normal text-[14px] leading-[24px] ${className}`.trim()}>
      {children}
    </p>
  );
}
