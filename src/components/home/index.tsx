import { Link } from "react-router-dom";
import { useHome } from "../../hooks/useHome";
import "./style/index.css";

const Home = () => {
  const { posts, deletePost, editPost, navigateSpecificPost } = useHome();

  return (
    <div className="home-page__container">
      <h1>Blog Posts</h1>
      {posts?.map((post) => (
        <div key={post.id} className="home-page__post-card">
          <p>Post ID: {post.id}</p>
          <h2
            onClick={() => navigateSpecificPost(post.id)}
            className="home-page__post-title"
          >
            {post.title}
          </h2>
          <p className="home-page__post-content">{post.content}</p>
          <p className="home-page__post-author">{post.author}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
          <button onClick={() => editPost(post.id)}>Edit</button>
        </div>
      ))}
      <br />
      <Link to="/create" className="home-page__link-create-post">
        Create Post
      </Link>
    </div>
  );
};

export { Home };
