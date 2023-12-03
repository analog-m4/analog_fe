import Task from "../Task/Task";

function Column({ columnName, tasks }) {
  const columnTasks = tasks.map(task => {
    return <Task key={task.id} title={task.title} description={task.description} />
  })

  return (
    <>
      <div className="flex flex-col w-4/12 min-w-1/4">
        <div className="column-title font-bold p-3 text-gray-900">{columnName}</div>
        {columnTasks}
      </div>
    </>
  )
}

export default Column;