import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdate, onDelete }) {
  if (tasks.length === 0) return <p className="text-center text-gray-500">No tasks yet.</p>;

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
