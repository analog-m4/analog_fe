function Task({ title, description }) {
  return (
    <>
      <div className="task flex flex-col rounded-md border border-gray-200 p-2">
        <div className="task-title">{title}</div>
        <div className="task-description font-light text-sm">{description}</div>
      </div>
    </>
  );
}

export default Task;
