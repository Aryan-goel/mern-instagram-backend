import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Pusher from 'pusher';
//! pass to mongo db server:aryan


//? app config
const app=express();
const port=process.env.PORT || 8080;



//? middlewares
app.use(express.json())
app.use(cors())

//?db config

const connection_url=`mongodb+srv://admin:aryan@cluster0.hr0np.mongodb.net/instaDB?retryWrites=true&w=majority`



//?api routes
app.get('/',(req,res)=>res.status(200).send("hello there!!"))
//? listners 
app.listen(port,()=>console.log(`listening on localhost:${port}`))