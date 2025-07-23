import { useState } from "react";

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState(task);

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(edited);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-sm">
      {isEditing ? (
        <>
          <input
            name="title"
            value={edited.title}
            onChange={handleChange}
            className="w-full border p-1 rounded mb-1"
          />
          <textarea
            name="description"
            value={edited.description}
            onChange={handleChange}
            className="w-full border p-1 rounded mb-1"
          />
          <input
            type="date"
            name="dueDate"
            value={edited.dueDate}
            onChange={handleChange}
            className="w-full border p-1 rounded mb-1"
          />
          <select
            name="status"
            value={edited.status}
            onChange={handleChange}
            className="w-full border p-1 rounded mb-1"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <select
            name="priority"
            value={edited.priority}
            onChange={handleChange}
            className="w-full border p-1 rounded mb-2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <div className="flex gap-2">
            <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-3 py-1 rounded">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-bold text-lg">{task.title}</h3>
          <p className="text-sm">{task.description}</p>
          <p className="text-xs text-gray-600">Due: {task.dueDate}</p>
          <p className="text-xs">Status: {task.status}, Priority: {task.priority}</p>
          <div className="flex gap-3 mt-2">
            <button onClick={() => setIsEditing(true)} className="text-blue-600 text-sm">Edit</button>
            <button onClick={() => onDelete(task.id)} className="text-red-600 text-sm">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
