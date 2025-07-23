import { useState } from "react";

function TaskForm({ onAdd }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Low",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title) return;

    onAdd({ ...task, id: Date.now() });

    setTask({
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
      priority: "Low",
    });
  };

  const inputStyle =
    "w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-blue-900";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mb-8">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        className={`${inputStyle} text-lg font-semibold placeholder-blue-400`}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className={`${inputStyle} text-lg placeholder-blue-400 resize-none`}
        rows={3}
      />

      {/* Date and selects in one row */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className={`${inputStyle} flex-1`}
        />

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className={`${inputStyle} flex-1`}
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className={`${inputStyle} flex-1`}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-lg bg-blue-600 text-white text-xl font-semibold hover:bg-red-600 transition"
      >
        ➕ Add Task
      </button>
    </form>
  );
}

export default TaskForm;
