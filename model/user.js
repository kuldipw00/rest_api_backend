const mongoose=require('mongoose')

const {ObjectId}=mongoose.Schema

const userSchema=new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    employee:{
        type:ObjectId,
        ref:"Employee",
        require:true
    }

},{timestamps:true}
)

module.exports=mongoose.model('User',userSchema)