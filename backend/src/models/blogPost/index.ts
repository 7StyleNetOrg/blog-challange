interface BlogPost {
  id: string;
  title?: string;
  content?: string;
  author?: string;
}

const BlogPosts: BlogPost[] = [];

export { BlogPost, BlogPosts };
