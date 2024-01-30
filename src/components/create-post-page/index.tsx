import { useCreatePost } from "../../hooks/useCreatePost";

const CreatePost: React.FC = () => {
  const { title, setTitle, content, setContent, error, handleSubmit } =
    useCreatePost();

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        autoFocus
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></textarea>
      {error && <p>{error}</p>}
      <button type="submit">Create Post</button>
    </form>
  );
};

export { CreatePost };
