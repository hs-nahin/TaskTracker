import { useState } from "react";

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState(task);

  const handleChange = (e) =>
    setEdited({ ...edited, [e.target.name]: e.target.value });

  const handleSave = () => {
    onUpdate(edited);
    setIsEditing(false);
  };

  const inputStyle =
    "w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition text-center text-blue-900";

  return (
    <div className="bg-blue-50 rounded-lg p-5 shadow-md border border-blue-400 flex flex-col items-center text-center">
      {isEditing ? (
        <>
          <input
            name="title"
            value={edited.title}
            onChange={handleChange}
            className={`${inputStyle} text-lg font-semibold mb-3`}
          />
          <textarea
            name="description"
            value={edited.description}
            onChange={handleChange}
            className={`${inputStyle} text-lg resize-none mb-3`}
            rows={3}
          />
          <input
            type="date"
            name="dueDate"
            value={edited.dueDate}
            onChange={handleChange}
            className={`${inputStyle} mb-3`}
          />
          <select
            name="status"
            value={edited.status}
            onChange={handleChange}
            className={`${inputStyle} mb-3`}
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <select
            name="priority"
            value={edited.priority}
            onChange={handleChange}
            className={`${inputStyle} mb-6`}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition cursor-pointer"
            >
              💾 Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition cursor-pointer"
            >
              ❌ Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">{task.title}</h3>
          <p className="text-lg text-blue-900 mb-3">
            {task.description || <em>No description</em>}
          </p>
          <p className="text-sm text-blue-700 mb-1">
            <strong>Due:</strong>{" "}
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Not set"}
          </p>
          <p className="text-sm text-blue-700 mb-6">
            <strong>Status:</strong> {task.status} | <strong>Priority:</strong> {task.priority}
          </p>

          <div className="flex justify-center gap-8">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-700 hover:text-red-600 font-semibold cursor-pointer"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-600 hover:text-blue-700 font-semibold cursor-pointer"
            >
              🗑️ Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
