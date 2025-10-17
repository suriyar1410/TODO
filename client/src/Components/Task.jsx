import React from 'react';
import { Link } from 'react-router-dom';

function Task({ taskid, taskName, handleDelete }) {
  return (
    <div className="task-box">
      <Link to={`/ShowTask/${taskid}`} className="task-name">
        {taskName}
      </Link>

      <div className="task-buttons">
        <Link to={`/UpdateTask/${taskid}`} className="btn btn-update">
          Update
        </Link>
        <button
          className="btn btn-delete"
          onClick={() => handleDelete(taskid)}>
          Delete </button>
      </div>
    </div>
  );
}

export default Task;
