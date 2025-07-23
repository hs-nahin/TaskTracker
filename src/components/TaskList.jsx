import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdate, onDelete }) {
  if (!tasks.length)
    return (
      <p className="text-center text-blue-700 italic font-medium">
        No tasks yet. Add a new task above.
      </p>
    );

  return (
    <div className="space-y-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
