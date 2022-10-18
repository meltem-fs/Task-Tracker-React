import React from "react";

const AddTask = () => {
  return (
    <div className="container">
      <label htmlFor="text">Task</label> <br />
      <input type="text" id="text" placeholder="AddTask" />
      <br />
      <br />
      <label htmlFor="day_time">Day & Time</label> <br />
      <input type="date" id="day_time" placeholder="Add Day & Time" /><br />
      <button>Save Task</button>
    </div>
  );
};

export default AddTask;
