import React, { useState } from 'react'

const Task = ({item}) => {

  const [click, setClick] = useState(false)


  return (
    <div onClick={() => setClick(!click)}>
      {click ? (
        <div>
          <h2 style={{ textDecoration: "line-through" }}>{item.text}</h2>
          <p>{item.day}</p>
        </div>
      ) : (
        <div>
          <h2 style={{ textDecoration: "none" }}>{item.text}</h2>
          <p>{item.day}</p>
        </div>
      )}
    </div>
  );
}

export default Task