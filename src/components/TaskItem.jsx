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
    "w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-blue-900";

  return (
    <div className="bg-blue-50 rounded-xl p-5 shadow-md border border-blue-200">
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
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
            <input
              type="date"
              name="dueDate"
              value={edited.dueDate}
              onChange={handleChange}
              className={`${inputStyle} flex-1`}
            />
            <select
              name="status"
              value={edited.status}
              onChange={handleChange}
              className={`${inputStyle} flex-1`}
            >
              <option>Pending</option>
              <option>Completed</option>
            </select>
            <select
              name="priority"
              value={edited.priority}
              onChange={handleChange}
              className={`${inputStyle} flex-1`}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              💾 Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition"
            >
              ❌ Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-blue-900 mb-1">{task.title}</h3>
          <p className="text-lg text-blue-900 mb-2">{task.description || <em>No description</em>}</p>
          <p className="text-sm text-blue-700 mb-1">
            <strong>Due:</strong>{" "}
            {task.dueDate ? new Date(task.dueDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "Not set"}
          </p>
          <p className="text-sm text-blue-700 mb-3">
            <strong>Status:</strong> {task.status} | <strong>Priority:</strong> {task.priority}
          </p>

          <div className="flex justify-end gap-6">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-700 hover:text-red-600 font-semibold"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-600 hover:text-blue-700 font-semibold"
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
