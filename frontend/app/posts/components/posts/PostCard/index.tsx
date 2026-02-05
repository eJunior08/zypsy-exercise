import { Heading1, Body1 } from "@/shared/components/Typography";
import { Button } from "@/shared/components/Button";
import { Star } from "@/shared/icons/star";
import { StarFilled } from "@/shared/icons/star-filled";
import { formatPostDate } from "@/shared/utils/dateFormatter";
import type { Post } from "@/app/posts/types/post";
import type { Category } from "@/app/posts/types/category";

type PostCardProps = {
  post: Post;
  categories: Category[];
  selectedCategoryId: string | null;
  onToggleFavorite: (categoryId: string) => void;
  onSelectCategory: (categoryId: string) => void;
};

export function PostCard({
  post,
  categories,
  selectedCategoryId,
  onToggleFavorite,
  onSelectCategory,
}: PostCardProps) {
  const formattedDate = formatPostDate(post.date);

  const postCategories = categories.filter((cat) =>
    post.categories.includes(cat.id)
  );

  return (
    <div className="flex flex-col gap-[16px] py-[32px] px-[16px] border-b border-accent last:border-b-0">
      <Heading1 className="text-primary">{formattedDate}</Heading1>
      <Body1 className="text-foreground">{post.description}</Body1>
      <div className="flex flex-row gap-[8px] flex-wrap">
        {postCategories.map((category) => {
          const isSelected = category.id === selectedCategoryId;
          const variant = isSelected ? "secondary" : "primary";
          const iconColor = isSelected ? "#1A2E05" : "#E3E3E3";
          const IconComponent = category.favorite ? StarFilled : Star;
          return (
            <Button
              key={category.id}
              variant={variant}
              onClick={() => onSelectCategory(category.id)}
              icon={
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(category.id);
                  }}
                  className="flex items-center cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation();
                      onToggleFavorite(category.id);
                    }
                  }}
                  aria-label={
                    category.favorite
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  <IconComponent color={iconColor} />
                </span>
              }
            >
              {category.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
