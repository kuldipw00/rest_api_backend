const User=require('../model/user')
const Employee=require('../model/employee')
const { options } = require('../routes/userRoutes')

exports.currentUser=(req,res)=>{
    res.send(req.userData)
}

exports.getUserList=(req,res)=>{

res.send(req.paginatedresult)
}

exports.getUserById=(req,res)=>{
    User.findById({_id:req.params.id},(err,user)=>{
        if(!err){
            return res.send(user)
        }
        return res.send("ERROR")
    })
}

exports.getUserByName=(req,res)=>{
    console.log(req.params.name)
    User.find({firstname:req.params.name},(err,data)=>{
        if(err){
            return res.send("error")
        }
        if(data==null||data==""){
            return res.send('no record found')
        }
        return res.send(data)
    })
}
exports.sortByname=(req,res)=>{

    User.find()
    .collation({locale: "en" })
    .sort({firstname:1})
    .then((data)=>{
            return res.send(data)

    }).catch(err=>{
        res.send("error")
    })

}
exports.sortByEmpId=(req,res)=>{
   
    User.find()
    .populate(
        'employee'   
    )
    .collation({locale: "en" })
    .sort({employee:1})
    .then((data)=>{
        return res.send(data)

    }).catch(err=>{
        res.send("error")
    })
}

exports.findByEmpId=(req,res)=>{
    User.findById({_id:req.params.id}).populate('employee').exec((err,data)=>{
        if(!err){
            req.send(data)
        }else{
            res.send(err)
        }
    })
}