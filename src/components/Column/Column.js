import Task from "../Task/Task";

function Column({ columnName, tasks }) {
  const columnTasks = tasks.map((task) => {
    return (
      <Task
        key={task.task_id}
        title={task.title}
        description={task.description}
      />
    );
  });

  return (
    <>
      <div className="flex flex-col w-4/12 min-w-1/4">
        <div className="column-title font-bold p-3 text-gray-900 font-fjalla text-lg">
          {columnName}
        </div>
        <div className="w-10/12 p-2 sm:w-11/12">{columnTasks}</div>
      </div>
    </>
  );
}

export default Column;
