import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ onAdd }) => {
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
    if (!task.title || !task.description || !task.dueDate) {
      toast.error("Please fill in all fields!");
      return;
    }

    onAdd({ ...task, id: uuidv4() });
    toast.success("Task added!");
    setTask({
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
      priority: "Low",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col text-blue-800"
    >
      <div className="mb-4">
        <label className="block font-medium mb-1">Title</label>
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task title"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Description</label>
        <input
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task description"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block font-medium mb-1">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white text-lg font-semibold py-3 mt-2 rounded-md hover:bg-red-600 transition duration-300"
      >
        ➕ Add Task
      </button>
    </form>
  );
};

export default TaskForm;
