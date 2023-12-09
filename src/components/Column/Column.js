import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";

function Column({ columnName, tasks, taskStatus }) {
  const columnTasks = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        priority={task.priority}
      />
    );
  });

  return (
    <>
      <div className="flex flex-col w-5/12 min-w-1/4">
        <div className="column-title ml-1 font-bold pt-3 pb-3 text-gray-900 font-fjalla text-xl">
          {columnName}
        </div>
        <div className="sm:w-10/12 md:w-11/12">{columnTasks}</div>
        <AddTask taskStatus={taskStatus} />
      </div>
    </>
  );
}

export default Column;
