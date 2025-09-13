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
  try{
    const res = await api.get(`/public/books/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//to delete the post 
export const deletePost = async (id) => {
  try{
    const res = await api.delete(`/public/books/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//to update the post
export const updatePost = async (id) => {
  try {
    const res = await api.patch(`/public/books/${id}`);
    // console.log(res.data);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default api;