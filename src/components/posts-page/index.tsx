import React from "react";
import { usePosts } from "../../hooks/usePosts";
import "./style/index.css";

const Posts: React.FC = () => {
  const { post, handleGoHomePage } = usePosts();

  if (!post)
    return <div className="post-page__loading">Post Page Loading...</div>;

  return (
    <>
      <div className="post-page">
        <p className="post-page__title">Post Page</p>
        <p className="post-page__id">Post ID: {post.id}</p>
        <p className="post-page__post-title">Post Title: {post.title}</p>
        <p className="post-page__content">Post Content: {post.content}</p>
        <button className="post-page__go-home-btn" onClick={handleGoHomePage}>
          Go Home
        </button>
      </div>
    </>
  );
};

export { Posts };
