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

  const inputStyle =
    "w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition";

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-blue-200">
      {isEditing ? (
        <>
          <input name="title" value={edited.title} onChange={handleChange} className={inputStyle} />
          <textarea name="description" value={edited.description} onChange={handleChange} className={inputStyle} />
          <input type="date" name="dueDate" value={edited.dueDate} onChange={handleChange} className={inputStyle} />
          <select name="status" value={edited.status} onChange={handleChange} className={inputStyle}>
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <select name="priority" value={edited.priority} onChange={handleChange} className={inputStyle}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-red-500 transition"
            >
              💾 Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400 transition"
            >
              ❌ Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-start flex-wrap">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
              <p className="text-xs text-gray-500">Status: {task.status} | Priority: {task.priority}</p>
            </div>
            <div className="flex flex-col gap-2 mt-2 sm:mt-0 sm:flex-row">
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-700 hover:text-red-500 font-medium text-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-600 hover:text-blue-600 font-medium text-sm"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
