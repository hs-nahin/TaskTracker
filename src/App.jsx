import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load saved tasks from local storage on first load
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Show toast messages
  const showAddToast = () => toast.success("Task added!");
  const showUpdateToast = () => toast.success("Task updated!");
  const showDeleteToast = () => toast.error("Task deleted!");

  // Add new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    showAddToast();
  };

  // Update a task
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    showUpdateToast();
  };

  // Delete a task
  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
    showDeleteToast();
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-start pt-20 px-4">
      <div className="w-full max-w-sm bg-gradient-to-br from-white via-blue-100 to-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">
          📝 Task Tracker
        </h1>

        {/* Task Form */}
        <TaskForm onAdd={addTask} />

        {/* Task List */}
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
