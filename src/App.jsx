import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') return
    setTasks([...tasks, { text: task, done: false }])
    setTask('')
  }

  const toggleTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].done = !updatedTasks[index].done
    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="input-group">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Yangi vazifa..."
        />
        <button onClick={addTask}>Qo‘shish</button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} className={t.done ? 'done' : ''}>
            <span onClick={() => toggleTask(i)}>{t.text}</span>
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
