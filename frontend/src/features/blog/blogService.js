import axios from "axios";

const postBlog = async (formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("https://blogapp-l1r9.onrender.com/api/blogs/", formdata, config);

  return await response.data;
};

const getBlog = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("https://blogapp-l1r9.onrender.com/api/blogs/", config);

  return await response.data;
};

const deleteMyBlog = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`https://blogapp-l1r9.onrender.com/api/blogs/${id}`, config);

  return await response.data;
};

const getSingleBlog = async (token,id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`https://blogapp-l1r9.onrender.com/api/blogs/${id}`, config);

  return await response.data;
};

const updateMyBlog = async (token, data) => {
  const id = data._id
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`https://blogapp-l1r9.onrender.com/api/blogs/${id}`, data, config);
  return await response.data;
}

export const blogService = {
  postBlog,
  getBlog,
  deleteMyBlog,
  updateMyBlog,
};
