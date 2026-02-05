import { useState, useEffect, useCallback } from "react";
import type { Post } from "@/app/posts/types/post";
import { fetchPostsByCategory } from "@/shared/api/services/postService";

type UsePostsReturn = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

export function usePosts(categoryId: string | null): UsePostsReturn {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    if (!categoryId) {
      setPosts([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await fetchPostsByCategory(categoryId);
      setPosts(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch posts";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [categoryId]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return {
    posts,
    loading,
    error,
    refetch: loadPosts,
  };
}
