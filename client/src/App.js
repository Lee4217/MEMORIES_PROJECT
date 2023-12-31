import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import memories from './images/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';
import { getPosts } from './actions/posts.js';



const App =  () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    

    useEffect(() => {
       dispatch(getPosts());
    },[currentId, dispatch])    

    

    return (
        <Container maxwith='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>  
                <Typography className={classes.heading}  variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;