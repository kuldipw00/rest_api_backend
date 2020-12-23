const expres=require('express')
const { body } = require('express-validator')
const { signin, signup } = require('../controllers/authController')

const router=expres.Router()

router.post('/signin',signin)
router.post('/signup',[
    body('email','email should be correct').isEmail()
],signup)


module.exports=router