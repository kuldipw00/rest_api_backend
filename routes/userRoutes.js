const express=require('express')
const { getUserList, getUserById, sortByname, getUserByName, currentUser, sortByEmpId, findByEmpId } = require('../controllers/userController')
const { verifyToken } = require('../middlewares/auth')
const { pagination } = require('../middlewares/pagination')
const router=express.Router()

router.get('/getcurrentUser',verifyToken,currentUser)
router.get('/getuser/id/:id',verifyToken,getUserById)
router.get('/getuser/empid/:id',verifyToken,findByEmpId)
router.get('/getuser/all',pagination,getUserList)
router.get('/getuser/sort/firstname',verifyToken,sortByname)
router.get('/getuser/name/:name',verifyToken,getUserByName)
router.get('/getuser/sort/emp',sortByEmpId)




module.exports=router