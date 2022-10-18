import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({text,day})
    // console.log(text)
    // console.log(day);
    setText("");
    setDay("");
  };

  return (
    <form onSubmit={handleSubmit} action="" className="container">
      <label htmlFor="text">Task</label> <br />
      <input
        type="text"
        id="text"
        value={text}
        placeholder="AddTask"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="day_time">Day & Time</label> <br />
      <input
        type="date"
        id="day_time"
        value={day}
        placeholder="Add Day & Time"
        onChange={(e) => setDay(e.target.value)}
      />
      <br />
      <input type="submit" value="save text" />
    </form>
  );
};

export default AddTask;
