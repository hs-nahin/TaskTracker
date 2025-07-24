import Sidebar from './Sidebar';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = ({ tasks, setTasks }) => {
  // Update task handler
  const handleUpdateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Delete task handler
  const handleDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  // Toggle status handler (optional, if TaskItem supports it)
  const handleToggleStatus = (task) => {
    const toggledStatus = task.status === 'Completed' ? 'Pending' : 'Completed';
    const updatedTask = { ...task, status: toggledStatus };
    handleUpdateTask(updatedTask);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Task Board</h1>
          <span className="text-indigo-600 font-medium">All Tasks ({tasks.length})</span>
        </header>

        <TaskList
          tasks={tasks}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
          onToggleStatus={handleToggleStatus} // if you implemented toggle
        />

        <TaskForm setTasks={setTasks} />
      </main>
    </div>
  );
};

export default TaskManager;
