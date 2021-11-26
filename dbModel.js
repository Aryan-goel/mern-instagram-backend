import mongoose from 'mongoose';
const instance = mongoose.Schema({
    caption:String,
    user:String,
    image:{
        data:Buffer,
        contentType:String,
    },
    comments:[],
});