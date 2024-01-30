import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../services/post-service";

const useCreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await PostService.createPost({ title, content });
        navigate("/");
      } catch (error) {
        setError("Failed to create post. Please try again.");
      }
    },
    [title, content, navigate],
  );

  const data = useMemo(() => {
    return {
      title,
      setTitle,
      content,
      setContent,
      error,
      handleSubmit,
    };
  }, [title, setTitle, content, setContent, error, handleSubmit]);

  return data;
};

export { useCreatePost };
