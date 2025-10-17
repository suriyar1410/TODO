import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from './Api.jsx';

function UpdateTask() {
  const navigate = useNavigate();
  const { taskid } = useParams();
  const [task, setTask] = useState({ taskName: '', taskDescription: '' });

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await api.get(`/${taskid}`);
        setTask(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTask();
  }, [taskid]);

  const Submittask = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/${taskid}`, task);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="container mt-4">
      <h1 className="mb-4">Update Task</h1>
      <form onSubmit={Submittask}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            name="taskName"
            value={task.taskName}
            onChange={InputHandler}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Task Description"
            name="taskDescription"
            value={task.taskDescription}
            onChange={InputHandler}
            rows="3"
          />
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-success">Update</button></div>
      </form>
    </div>

     </>
  );
}

export default UpdateTask;
