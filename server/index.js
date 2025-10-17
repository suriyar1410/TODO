const express=require("express")
const mongoose=require('mongoose');
const taskroutes = require("./Routes/Route.js");
require('dotenv').config();
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,   
    useUnifiedTopology: true  
})
.then(()=>{console.log("Database connected...")})
.then(()=>{app.listen(process.env.PORT,()=>{console.log("server Starts...")})})
.catch((err)=>{console.log(err)})


app.use('/api',taskroutes)