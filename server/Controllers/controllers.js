const Task=require('../Models/Model.js')

const getAllTask=async (req,res)=>{
try {
     const tasks=await Task.find()
     if(tasks.length===0){
     return res.status(404).json({message:"No Task Yet"})
     }
     return res.status(200).json(tasks) 
} catch (error) {
    console.log(error)
}
}
const createTask=async(req,res)=>{
    const{taskName,taskDescription}=req.body
    try {
        const task=new Task({ taskName, taskDescription})
        await task.save()
        return res.status(201).json({message:"Task Created"},task)
    } catch (error) {
         console.log(error)
    }
}

const SingleTask=async(req,res)=>{
    const {id}=req.params
    try {
        const task=await Task.findById(id)
        if(!task){
          return res.status(404).json({message:"No Task in this ID"})   
        }
        return res.status(200).json(task)
    } catch (error) {
        console.log(error)
    }
}

const UpdateTask=async(req,res)=>{
       const {id}=req.params;
       const{taskName,taskDescription}=req.body;
       try {
        const task=await Task.findByIdAndUpdate(id,{taskName,taskDescription})
         if(!task){
          return res.status(404).json({message:"No Task in this ID"})   
        }
        res.status(200).json({message:"Task Updated"},task)
       } catch (error) {
          console.log(error)
       }
}

const DeleteTask=async(req,res)=>{
    const {id}=req.params;
     try {
        const task=await Task.findByIdAndDelete(id)
         if(!task){
          return res.status(404).json({message:"No Task in this ID"})   
        }
        res.status(200).json({message:"Task Deleted"},task)
       } catch (error) {
          console.log(error)
       }
}

module.exports={getAllTask,createTask,SingleTask,UpdateTask,DeleteTask}