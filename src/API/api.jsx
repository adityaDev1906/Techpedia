import axios from "axios";

const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
});

// to fetch the data
export const fetchPosts = async (pageNumber) => {
  const res = await api.get(`/public/books?page=${(pageNumber / 10) + 1}`);
  // console.log(res.data.data.nextPage);
  return res.status === 200 ? res.data : [];
}

//to fetch the individual data
export const fetchIndvPost = async (id) => {
  try {
    const res = await api.get(`/public/books/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//to delete the post 
export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/public/books/${id}`);
    return res.status === 200 ? res : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//to add the post
export const addPost = async (data) => {
  try {
    const res = await api.post(`/public/books`, data);
    // Return the entire response data on success
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}

//to update the post
export const updatePost = async (id, post) => {
  try {
    const res = await api.patch(`/public/books/${id}`, post);
    return res.status === 200 ? res : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};  

export default api;