import { Heading1 } from "@/shared/components/Typography";

type PostsHeaderProps = {
  count: number;
  categoryName: string;
};

export function PostsHeader({ count, categoryName }: PostsHeaderProps) {
  return (
    <div className="py-[20px] px-[36px] border-b border-primary-foreground">
      <Heading1 className="text-foreground">
        {`Found ${count} post${count !== 1 ? "s" : ""} of "${categoryName}"`}
      </Heading1>
    </div>
  );
}
