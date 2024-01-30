import axios from "axios";
import IEditPostForm from "../../utils/interfaces/IEditPostForm";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const token = process.env.REACT_APP_FAKE_TOKEN as string;

const PostService = {
  createPost: async (postData: IEditPostForm) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/posts`, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPosts: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPostById: async (id: string) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updatePost: async (id: string, postData: IEditPostForm) => {
    try {
      const response = await axios.put(`${apiBaseUrl}/posts/${id}`, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePost: async (id: string) => {
    try {
      const response = await axios.delete(`${apiBaseUrl}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PostService;
