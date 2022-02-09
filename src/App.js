// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'one piece rulez',
        day: 'Friday',
        reminder: true
    },
    {
        id: 2,
        text: 'one piece rulez over all',
        day: 'Sunday',
        reminder: false
    }
])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
}

// USING A CLASS:
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
