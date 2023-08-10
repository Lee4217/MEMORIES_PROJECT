import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";



export const getPosts = async (req, res) => {

    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save();
        res.status(200).json(newPost);

    } catch (error) {

        res.status(409).json({error : error.message})
    }
}



export const updatePost = async (req, res) => {
    const id = req.params['id']
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.isValidObjectId(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags:tags, selectedFile, _id: id }; // the saved post in MongoDB has id, need to add onto it, otherwise cant save

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const id = req.params['id']
    
    if (!mongoose.isValidObjectId(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" })
}


export const likePost = async (req, res) => {
    const id = req.params['id']
    
    if (!mongoose.isValidObjectId(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await PostMessage.findById(id);

    const likedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(likedPost);
}