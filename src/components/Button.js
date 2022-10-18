import React from 'react'

const Button = ({ setShowAddTask, showAddTask }) => {
  return (
    <div>
      <button onClick={() => setShowAddTask(!showAddTask)}>
        CLOSE ADD TASK BAR
      </button>
    </div>
  );
};

export default Button