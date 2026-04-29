import { useEffect, useState } from "react";
import API from "./api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const getTasks = async () => {
    const res = await API.get("/");
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await API.post("/", { title });
    setTitle("");
    getTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    getTasks();
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="input-section">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* ✅ Footer */}
      <div className="footer">
        <p><strong>Boddu Venkateswara Rao</strong> 🚀</p>
        <p>Email: eswareswar9143@gmail.com</p>

        <div className="links">
          <a href="https://github.com/venkatesh915" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://mynewportfolio-rust.vercel.app/" target="_blank" rel="noreferrer">
            Portfolio
          </a>
          <a href="https://www.linkedin.com/in/venkateswara-rao-boddu-747474302" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;