const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
    taskName:String,
    taskDescription:String
})

const Task=mongoose.model("Task",TodoSchema)

module.exports=Task;