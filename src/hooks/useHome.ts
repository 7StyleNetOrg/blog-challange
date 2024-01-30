import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../services/post-service";
import IPost from "../utils/interfaces/IPost";

const useHome = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    PostService.getPosts()
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const deletePost = useCallback(
    async (id: string) => {
      PostService.deletePost(id)
        .then(() => {
          const updatedPosts = posts.filter((post) => post.id !== id);
          setPosts(updatedPosts);
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
    [posts],
  );

  const editPost = useCallback(
    (id: string) => {
      navigate(`/edit/${id}`);
    },
    [navigate],
  );

  const navigateSpecificPost = useCallback(
    (id: string) => {
      navigate(`/post/${id}`);
    },
    [navigate],
  );

  const data = useMemo(() => {
    return {
      posts,
      deletePost,
      editPost,
      navigateSpecificPost,
    };
  }, [posts, deletePost, editPost, navigateSpecificPost]);

  return data;
};

export { useHome };
