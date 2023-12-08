import EditTask from "../EditTask/EditTask";

function Task({ title, id, description, status, priority }) {
  return (
    <>
      <div className="task flex justify-between rounded-md border border-gray-200 p-3 shadow-sm mb-3 h-max">
        <div className="flex flex-col">
        <div className="task-title">{title}</div>
        <div className="task-description font-light text-sm mb-2">{description}</div>
        </div>
        <EditTask
          taskId={id}
          taskTitle={title}
          taskDescription={description}
          taskStatus={status}
          taskPriority={priority}
        />
      </div>
    </>
  );
}

export default Task;
