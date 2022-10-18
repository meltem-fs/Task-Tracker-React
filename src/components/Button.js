import React from 'react'

const Button = ({ setShowAddTask, showAddTask }) => {
  return (
    <div>
      <button onClick={() => setShowAddTask(!showAddTask)}>
        {showAddTask ? " CLOSE TASK BAR" : " ADD TASK BAR"}
      </button>
      <hr />
    </div>
  );
};

export default Button