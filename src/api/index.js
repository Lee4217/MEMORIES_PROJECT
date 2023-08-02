// this file contains all the files related to posts request (create, get_all, update, delete)
import axios from 'axios';

const url = 'http://localhost:4000/posts';

export const fetchPosts = () => axios.get(url);

