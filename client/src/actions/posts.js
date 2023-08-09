import * as api from '../api/index.js'

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts()

        dispatch({type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error);
    }
}
export const createPost = (newPost) => async (dispatch) => {
    try {
        const {data} = await api.createPost(newPost)

        dispatch({type: 'CREATE', payload: data });

    } catch (error) {
        console.log(error);
    }
}


export const updatePost = ( id, updatedPost) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, updatedPost);

        dispatch({ type: 'UPDATE', payload: data })

    } catch (error) {
        console.log(error);
    }
}


export const likePost = () => async (dispatch) => {
    try {
        return null

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        
        dispatch({ type: 'DELETE' , payload: id })

    } catch (error) {
        console.log(error);
    }
}
