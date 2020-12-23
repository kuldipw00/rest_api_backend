const jwt=require('jsonwebtoken')

exports.verifyToken=(req,res,next)=>{
    try{
    const getToken=req.headers.authorization
    const token=getToken.split(" ")[1]
    console.log(token)
    const decodedData=jwt.verify(token,process.env.SECRET)
    req.userData=decodedData
    next()
    }catch(err){
        return res.json({message:"ACCESS DENIED"})
    }
}