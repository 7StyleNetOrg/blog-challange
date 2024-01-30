import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../services/post-service";
import IEditPostForm from "../utils/interfaces/IEditPostForm";

const useEditPost = () => {
  const [formData, setFormData] = useState<IEditPostForm>({
    title: "",
    content: "",
  });
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await PostService.getPostById(id as string);
      setFormData({
        title: post.title,
        content: post.content,
      });
    };
    fetchPost();
  }, [id]);

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await PostService.updatePost(id as string, formData);
      alert("Post updated successfully!");
      setFormData({
        title: "",
        content: "",
      });
      navigate(`/post/${id}`);
    },
    [formData, id, navigate],
  );

  const handleGoHomePage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const data = useMemo(() => {
    return {
      formData,
      handleChange,
      handleSubmit,
      handleGoHomePage,
    };
  }, [formData, handleChange, handleSubmit, handleGoHomePage]);

  return data;
};

export { useEditPost };
