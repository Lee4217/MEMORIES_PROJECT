// this file contains all the files related to posts request (create, get_all, update, delete)
import axios from 'axios';
import {useState, useEffect} from "react";



const baseURL = 'http://localhost:4000/posts';


const [posts, setPosts] = useState([]);

useEffect(() => {
    axios.get(baseURL).then((response) => {
        setPosts = {data};
    })
},[])
