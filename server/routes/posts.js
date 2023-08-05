import express from 'express';

import { getPosts, createPost } from '../controllers/post.js';

const router = express.Router();


router.get('/', getPosts);  // get all posts 
router.post('/', createPost);   // create new post


export default router;
