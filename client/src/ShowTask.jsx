import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from './Api.jsx';

function ShowTask() {
  const { taskid } = useParams();
  const [task, setTask] = useState(null);

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

  if (!task) return <div className="container mt-4"><h2>Loading...</h2></div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-3">{task.taskName}</h1>
      <p className="lead">{task.taskDescription}</p>
    </div>
  );
}

export default ShowTask;
