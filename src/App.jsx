import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const notifyAdd = () => toast.success("Task added!");
  const notifyUpdate = () => toast.success("Task updated!");
  const notifyDelete = () => toast.error("Task deleted!");

  const addTask = (task) => {
    setTasks([...tasks, task]);
    notifyAdd();
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    notifyUpdate();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    notifyDelete();
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg border-4 border-blue-600 shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          📝 Task Tracker
        </h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
