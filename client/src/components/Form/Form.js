import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64'; 


import useStyles from './styles.js'
import { createPost, updatePost } from "../../actions/posts.js"

const Form = ( {currentId, setCurrentId} ) => {
    const [postData, setPostData] = useState({creator: '',title: '',message: '', tags:[], selectFile: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const selectedPost = useSelector((state) => {      // if edit post selected >> currentId has value, then get the related post detail
        return (currentId)? state.posts.find( (post)=> (post._id === currentId)? post : null) : null
    })
    
    useEffect(()=>{
        if(selectedPost) {
            setPostData(selectedPost);
        }
    },[selectedPost])
   

    
    const handleSubmit = (e) => {
        e.preventDefault();

        
        if(currentId) {  // editing post
            // console.log('postDate:', postData)
            // console.log('selected post:', selectedPost)
            dispatch(updatePost(currentId, postData))
            clear()
        } else {
            dispatch(createPost(postData))
            clear();
        }
    }

    const clear = () => {
        setPostData({creator: '',title: '',message: '', tags:[], selectFile: ''});
        setCurrentId(0);
    }
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> { (currentId) ? 'Editing' : 'Creating'} a Memory </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})}/>
                <div className={classes.fileInput}> <FileBase type = 'file' multiple={false} onDone={({base64}) => setPostData({ ...postData, selectFile: base64 })} /> </div>
                <Button className={classes.buttonSubmit} variant='contained' color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant='contained' color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;