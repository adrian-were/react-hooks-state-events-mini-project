import React from "react";

function TaskList() {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
