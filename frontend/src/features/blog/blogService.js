import axios from "axios";

const postBlog = async (formdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/api/blogs/", formdata, config);

  return await response.data;
};

const getBlog = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/blogs/", config);

  return await response.data;
};

const deleteMyBlog = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`/api/blogs/${id}`, config);

  return await response.data;
};

const getSingleBlog = async (token,id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`/api/blogs/${id}`, config);

  return await response.data;
};

const updateMyBlog = async (token, data) => {
  const id = data._id
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`/api/blogs/${id}`, data, config);
  return await response.data;
}

export const blogService = {
  postBlog,
  getBlog,
  deleteMyBlog,
  updateMyBlog,
};
