const User=require('../model/user')

module.exports={
    userFields:async function({email},req){
        const user=await User.find({email:email})
        
        return{
            firstname:user[0].firstname,
            lastname:user[0].lastname,
            email:user[0].email,
            employee:user[0].employee
        }
    }
}