const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')
const { verifyToken } = require('./middlewares/auth')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const { graphqlHTTP } = require('express-graphql');
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')
const graphqlSchema=require('./graphql/schema')
const graphqlResolver=require('./graphql/resolver')

const dotenv=require('dotenv')

const port=process.env.PORT||3000

dotenv.config()
app.use(bodyParser.json())


mongoose.connect(process.env.DB_URL,{ useUnifiedTopology: true , useNewUrlParser: true })
.then(result=>{
    console.log("DB CONNECTED")
}).catch(err=>{
    console.log("ERROR CONNECTING DB")
})



app.get('/',(req,res)=>{
    res.json({Message:"WELCOME HOME PAGE"})
})
app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/graphql',graphqlHTTP({
    schema:graphqlSchema,
    rootValue:graphqlResolver,
    graphiql:true
}))


app.listen(port,()=>{
    console.log(`listening on ${port}`)
})

