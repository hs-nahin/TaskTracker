import { useState } from "react";

function TaskForm({ onAdd }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Low",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title) return;

    const newTask = {
      ...task,
      id: Date.now(), // simple ID for beginners
    };

    onAdd(newTask);

    setTask({
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
      priority: "Low",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6 space-y-3">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option>Pending</option>
        <option>Completed</option>
      </select>
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
