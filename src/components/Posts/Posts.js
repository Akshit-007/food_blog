import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';

import Post from'./Post/Post';
import useStyles from './Styles';


const Posts=({ setCurrentId })=>{

     
    const posts=useSelector((state)=>state.posts);
  
const classes=useStyles();  


    return(
       <div>
        <h1 >Posts</h1>
        {!posts.length? <CircularProgress />:(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                      {posts.map(post=>(
                          <Grid key={post._id} item xs={12} sm={6}>
                              <Post post={post} setCurrentId={setCurrentId}/>
                          </Grid>
                      ))}
            </Grid>
        )}
       </div>
    )
};

export default Posts;