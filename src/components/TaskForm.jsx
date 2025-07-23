import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.dueDate) return;

    const newTask = { ...form, id: uuidv4() };
    onAdd(newTask);
    setForm({
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
      priority: "Medium",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 mb-6">
<input
  type="text"
  name="title"
  placeholder="Task Title"
  value={form.title}
  onChange={handleChange}
  className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
/>



      <textarea
        name="description"
        placeholder="Task Description"
        value={form.description}
        onChange={handleChange}
        rows={3}
        className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />

      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-red-500 text-white font-semibold py-3 rounded-md transition duration-300"
      >
        ➕ Add Task
      </button>
    </form>
  );
};

export default TaskForm;
