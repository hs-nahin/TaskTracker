import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdate, onDelete }) {
  if (!tasks.length)
    return (
      <p className="text-center text-blue-700 italic font-medium mt-6">
        No tasks yet. Add a new task above.
      </p>
    );

  return (
    <div className="w-full max-w-md mt-8 space-y-6">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
