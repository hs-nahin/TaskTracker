import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">📝 Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
