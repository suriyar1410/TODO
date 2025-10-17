const express=require('express')
const {getAllTask, createTask, SingleTask, UpdateTask, DeleteTask}=require('../Controllers/controllers.js')
const taskroutes=express.Router()

taskroutes.get('/',getAllTask)
taskroutes.get('/:id',SingleTask)
taskroutes.post('/',createTask)
taskroutes.put('/:id',UpdateTask)
taskroutes.delete('/:id',DeleteTask)


module.exports=taskroutes;