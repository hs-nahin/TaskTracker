import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdate, onDelete }) {
  if (tasks.length === 0)
    return <p className="text-center text-gray-600 italic">No tasks yet. Add one above.</p>;

  return (
    <div className="space-y-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
