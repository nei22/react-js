import "./Task.css";
import React from "react";

const Task = ({ task }) => {
  return (
    <>
      <div className="task-container">{task.title}</div>
    </>
  );
};

export default Task;
