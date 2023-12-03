import { useSelector } from "react-redux";
import Column from "../Column/Column";
import Task from "../Task/Task";

function ProjectBoard({ selectedProject }) {
  const user = useSelector((state) => state.user.user);
  
  const projectTasks = selectedProject ? selectedProject.tasks : [];
  console.log(selectedProject)

  const backlogTasks = projectTasks.filter(task => task.status === 'backlog');
  const doingTasks = projectTasks.filter(task => task.status === 'doing');
  const doneTasks = projectTasks.filter(task => task.status === 'done');

  return (
    <>
      <div className="flex flex-col w-10/12 drop-shadow-sm">
        {selectedProject ? <p>{selectedProject.title}</p> : <p>No project selected</p>}
        <div className="flex h-3/4 w-9/12 border border-gray-200 rounded-lg bg-white">
          <Column columnName='Backlog' tasks={backlogTasks} />
          <Column columnName='Doing' tasks={doingTasks} />
          <Column columnName='Done' tasks={doneTasks} />
        </div>
      </div>
    </>
  );
}

export default ProjectBoard;
