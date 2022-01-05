import axios from 'axios';

const API=axios.create({ baseURL: "https://frozen-cove-87949.herokuapp.com" });

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});



export const fetchPost=()=> API.get('/posts');
export const createPost=(newPost)=>API.post('/posts', newPost);
export const updatePost=(id,updatedPost)=>API.patch(`/posts/${id}`, updatedPost);
export const deletePost=(id)=>API.delete(`/posts/${id}`);
export const likePost=(id)=>API.patch(`/posts/${id}/likePost`);

export const signIn=(FormData)=>API.post('/user/signin', FormData);
export const signUp=(FormData)=>API.post('/user/signup', FormData);
