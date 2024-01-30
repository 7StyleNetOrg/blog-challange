import React from "react";
import { useEditPost } from "../../hooks/useEditPost";

const EditPost: React.FC = () => {
  const { formData, handleChange, handleSubmit, handleGoHomePage } =
    useEditPost();

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Post</h1>
      <input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
      ></textarea>
      <button type="submit">Update Post</button>
      <button type="button" onClick={handleGoHomePage}>
        Go Home
      </button>
    </form>
  );
};

export { EditPost };
