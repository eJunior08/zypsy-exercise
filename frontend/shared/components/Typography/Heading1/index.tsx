import { PropsWithChildren } from "react";

type Heading1Props = PropsWithChildren<{
  className?: string;
}>;

export function Heading1({ children, className = "" }: Heading1Props) {
  return (
    <h1 className={`font-semibold text-[14px] leading-[24px] ${className}`.trim()}>
      {children}
    </h1>
  );
}
