import React from 'react'
import Task from './Task';

const Tasks = ({ tasks }) => {
  return <div >
    {tasks.map((item,index) => (
      <Task  item={item} key={index} />
    ) )}
  </div>;
};

export default Tasks