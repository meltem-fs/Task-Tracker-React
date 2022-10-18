
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([{
  text:"homework",
  day:"11.11.2020",
  id:1,
  isDone:false

}])

  const addTask = (newTask)=>{
    const id= Math.floor(Math.random()*1000+1);
    const addNewText = { id, ...newTask}
    setTasks([...tasks,addNewText])
  }
  return (
    <div className="App">
      <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
