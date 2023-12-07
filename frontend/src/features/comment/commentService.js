import axios from "axios";

const getComment = async (id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`/api/blogs/comments/${id}` , config);
  
    return await response.data;
};
const postComment = async (formdata, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post("/api/blogs/comments", formdata, config);
  
    return await response.data;
};
  

export const commentService = {
    postComment,
    getComment,
}