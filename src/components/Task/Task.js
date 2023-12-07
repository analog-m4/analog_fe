import EditTask from "../EditTask/EditTask";

function Task({ title, id, description, status, priority }) {
  return (
    <>
      <div className="task flex flex-col rounded-md border border-gray-200 p-2 shadow-sm mb-3">
        <div className="task-title">{title}</div>
        <div className="task-description font-light text-sm">{description}</div>
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
