import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../services/post-service";
import IPost from "../utils/interfaces/IPost";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const usePosts = () => {
  const [post, setPost] = useState<IPost | undefined>(undefined);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      await delay(1000);
      const post = await PostService.getPostById(id as string);
      setPost(post);
    };

    fetchPost();
  }, [id]);

  const handleGoHomePage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const data = useMemo(() => {
    return {
      post,
      handleGoHomePage,
    };
  }, [post, handleGoHomePage]);

  return data;
};

export { usePosts };
