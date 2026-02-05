import { Heading1 } from "@/shared/components/Typography";

export function SidebarHeader() {
  return (
    <div className="h-[64px] bg-primary flex items-center justify-center px-[24px]">
      <Heading1 className="text-primary-foreground">Posts</Heading1>
    </div>
  );
}
