const User=require('../model/user')

exports.pagination=async(req,res,next)=>{

    const page=parseInt(req.query.page)
    const limit=parseInt(req.query.limit)

    const startIndex=(page-1)*limit
    const endIndex=page*limit

    results={}

    if(startIndex>0){
        results.previous={
            page:page-1,
            limit:limit
    
        }
    }
    if(endIndex<User.length){
        results.next={
            page:page+1,
            limit:limit
        }
    }
    console.log(page,limit)
    try{
        results.results=await User.find().populate('employee').limit(limit).skip(startIndex).exec()
        res.send(results)
        
        next()
    }catch(e){
        res.status(500).json({message:e})
    }
}