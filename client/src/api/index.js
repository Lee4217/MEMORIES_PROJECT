// this file contains all the files related to posts request (create, get_all, update, delete)
import axios from 'axios';

const url = 'http://localhost:4000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const likePost = () => null;
export const deletePost = () => null;

    
