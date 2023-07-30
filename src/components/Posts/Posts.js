import React from "react";


import Post from "./Post/Post.js";
import useStyles from './styles.js'



const Posts = () => {
    const classes = useStyles();
    return (
        <h1>
            below are all Posts
            <Post />
        </h1>
        
    )
}

export default Posts;