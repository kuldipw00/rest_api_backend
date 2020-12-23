const { validationResult } = require('express-validator')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../model/user')
const Employee=require('../model/employee')
const { isValidObjectId, Schema } = require('mongoose')
const { json } = require('body-parser')
//const employee = require('../model/employee')
exports.signin=(req,res)=>{
    console.log(req.body)
    User.find({email:req.body.email},async(err,user)=>{
        if(!err){
            console.log(user[0].password)
            await bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(result){
                    const token=jwt.sign({user},process.env.SECRET,{expiresIn:'1h'})
                    return res.send(token)
                }
                else{
                    return res.send("password wrong")
                }
            })

        }else{
            return res.json({"message":"you are not reistered user"})
        }
        
    })
    
}

exports.signup=async(req,res)=>{

    // const emp=new Employee({
    //     org_name:req.body.org_name
    // })
    // emp.save((error,data)=>{
    //     if(error){
    //         console.log("error in employee")
    //     }
         
    // }
    // )
    const emp=new Employee()
    emp.org_name=req.body.org_name
    await emp.save()
    const hasPassword=await bcrypt.hash(req.body.password,10)
    console.log(hasPassword)
    const user=new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hasPassword,
        employee:emp
    })
    user.save((err,data)=>{

            if(!err){

                res.send(user)
            }
            else{
                return res.json({"message":err})
            }
            
    })

    

   
     
}