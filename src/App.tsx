import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreatePostPage } from "./pages/create-post-page";
import { EditPostPage } from "./pages/edit-post-page";
import { HomePage } from "./pages/home";
import { PostsPage } from "./pages/posts-page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostsPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
