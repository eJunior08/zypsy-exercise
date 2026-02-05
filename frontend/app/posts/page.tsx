"use client";

import { PostsList } from "@/app/posts/components/posts/PostsList";
import { usePosts } from "@/app/posts/hooks/usePosts";
import { usePostsContext } from "@/app/posts/context/PostsContext";

export default function PostsPage() {
  const { categories, selectedCategoryId, toggleFavorite, selectCategory } = usePostsContext();
  const { posts, loading: postsLoading } = usePosts(selectedCategoryId);

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId);

  if (postsLoading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-foreground">Loading posts...</div>
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-foreground">Please select a category</div>
      </div>
    );
  }

  return (
    <PostsList
      posts={posts}
      categoryName={selectedCategory.name}
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onToggleFavorite={toggleFavorite}
      onSelectCategory={selectCategory}
    />
  );
}
