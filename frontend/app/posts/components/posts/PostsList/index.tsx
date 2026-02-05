import { PostCard } from "@/app/posts/components/posts/PostCard";
import { PostsHeader } from "@/app/posts/components/posts/PostsHeader";
import type { Post } from "@/app/posts/types/post";
import type { Category } from "@/app/posts/types/category";

type PostsListProps = {
  posts: Post[];
  categoryName: string;
  categories: Category[];
  selectedCategoryId: string | null;
  onToggleFavorite: (categoryId: string) => void;
  onSelectCategory: (categoryId: string) => void;
};

export function PostsList({
  posts,
  categoryName,
  categories,
  selectedCategoryId,
  onToggleFavorite,
  onSelectCategory,
}: PostsListProps) {
  return (
    <div className="border border-accent rounded-[4px]">
      {categoryName && <PostsHeader count={posts.length} categoryName={categoryName} />}
      <div className="px-[16px]">
        {posts.length === 0 ? (
          <div className="py-[32px] px-[16px] text-center text-foreground">
            No posts found in this category
          </div>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              categories={categories}
              selectedCategoryId={selectedCategoryId}
              onToggleFavorite={onToggleFavorite}
              onSelectCategory={onSelectCategory}
            />
          ))
        )}
      </div>
    </div>
  );
}
