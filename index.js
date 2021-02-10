import express from 'express';
import mongoose from 'mongoose';
// import bodyParser from 'bodyParser';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app=express();
dotenv.config();


app.use(express.json());
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRoutes);
app.get('/',(req,res)=>{
  res.send('Hello to food blogs api');
})

// const CONNECTION_URI= 'mongodb+srv://akshit1005:trivedi@cluster0.t5ght.mongodb.net/Cluster0?retryWrites=true&w=majority';
const PORT=process.env.PORT || 7000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>app.listen(PORT,()=>console.log(`Server running on port :${PORT}`)))
  .catch((err)=>console.log(err))

  mongoose.set('useFindAndModify',false);