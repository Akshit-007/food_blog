import express from 'express';
import mongoose from 'mongoose';
// import bodyParser from 'bodyParser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
const PORT=process.env.PORT || 7000;


const app=express();
dotenv.config();


app.use(express.json());
app.use(cors());



// const CONNECTION_URI= 'mongodb+srv://akshit1005:trivedi@cluster0.t5ght.mongodb.net/Cluster0?retryWrites=true&w=majority';


mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(console.log('Mongo db connected'))
  .catch((err)=>console.log(err))

  app.use('/posts',postRoutes);
   app.use('/user',userRoutes);



app.get('/',(req,res)=>{
  res.send('Hello to food blogs api');
})
if(process.env.NODE_ENV==='production'){
  app.use(express.static('../client/build'));
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}



  mongoose.set('useFindAndModify',false);
  app.listen(PORT,()=>console.log(`Server running on port :${PORT}`))