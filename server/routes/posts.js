import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/post.js';

const router = express.Router();


router.get('/', getPosts);  // get all posts 
router.post('/', createPost);   // create new post
router.patch('/:id', updatePost);   // update new post
router.delete('/:id', deletePost) // delete post
router.patch('/:id/likePost', likePost) // delete post


export default router;
