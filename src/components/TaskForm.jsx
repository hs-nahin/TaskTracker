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
      id: Date.now(),
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

  const inputStyle =
    "w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition";

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-xl mb-8 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className={inputStyle}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className={inputStyle}
        />
        <select name="status" value={task.status} onChange={handleChange} className={inputStyle}>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <select name="priority" value={task.priority} onChange={handleChange} className={inputStyle}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className={inputStyle}
        rows="3"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-red-500 transition font-semibold tracking-wide"
      >
        ➕ Add Task
      </button>
    </form>
  );
}

export default TaskForm;
