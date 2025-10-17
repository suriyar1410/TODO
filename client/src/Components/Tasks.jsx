import React, { useEffect, useState } from 'react';
import Task from './Task';
import { Link } from 'react-router-dom';
import { api } from '../Api.jsx'; 

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get('/'); 
        setTasks(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = async (taskid) => {
    try {
      await api.delete(`/${taskid}`); 
      setTasks(tasks.filter(task => task._id !== taskid));
    } catch (error) {
      console.error(error);
    }
  };

  return (
<div className="container">
  <div className="header">
    <h1>My Todo App</h1>
    <Link to="/AddTask" className="btn btn-add">Add Task</Link>
  </div>

  <div className="task-list">
    {tasks.length === 0 ? (
      <p className="text-center">No tasks yet. Add one!</p>
    ) : (
      tasks.map(task => (
        <Task
          key={task._id}
          taskid={task._id}
          taskName={task.taskName}
          handleDelete={handleDelete}
        />
      ))
    )}
  </div>
</div>


  );
}

export default Tasks;
