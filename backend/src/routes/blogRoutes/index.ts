import { Router, Request, Response } from "express";
import { BlogPost, BlogPosts } from "../../models/blogPost";
import { v4 as uuidv4 } from "uuid";
import authenticate from "../../middleware/auth";

const router = Router();

router.use(authenticate);

router.get("/", (req: Request, res: Response) => {
  res.json(BlogPosts);
});

router.get("/:id", (req: Request, res: Response) => {
  const post = BlogPosts.find((p) => p.id === req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
});

router.post("/", (req: Request, res: Response) => {
  const { title, content } = req.body;

  const newPost: BlogPost = {
    id: uuidv4(),
    title,
    content,
    author: "John Doe",
  };
  BlogPosts.push(newPost);
  res.status(201).json(newPost);
});

router.put("/:id", (req: Request, res: Response) => {
  const index = BlogPosts.findIndex((p) => p.id === req.params.id);
  if (index !== -1) {
    BlogPosts[index] = { ...BlogPosts[index], ...req.body };
    res.json(BlogPosts[index]);
  } else {
    res.status(404).send("Post not found");
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const index = BlogPosts.findIndex((p) => p.id === req.params.id);
  if (index !== -1) {
    BlogPosts.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Post not found");
  }
});

export default router;
