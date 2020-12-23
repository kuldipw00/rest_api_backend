const mongoose=require('mongoose')

const empSchema=new mongoose.Schema({
    org_name:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=mongoose.model('Employee',empSchema)