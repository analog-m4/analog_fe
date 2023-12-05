import { useSelector } from "react-redux";
import Column from "../Column/Column";

function ProjectBoard({ selectedProject }) {
  console.log("selectedProject", selectedProject)
  const projectTasks = selectedProject && selectedProject.tasks && selectedProject.tasks.length > 0 ? selectedProject.tasks : [];
  console.log("projectTasks", projectTasks)

  const backlogTasks = projectTasks.filter(task => task.status === 'backlog');
  const doingTasks = projectTasks.filter(task => task.status === 'doing');
  const doneTasks = projectTasks.filter(task => task.status === 'done');

  return (
    <>
      <div className="flex flex-col w-10/12">
        {selectedProject ? 
        <div className="flex justify-between w-9/12 pl-1 pr-2 font-fjalla text-2xl text-purple-600 mb-1">
          {selectedProject.title}
          <div className="text-gray-900 self-end text-lg italic">
          Project Board
            </div>
          </div> : 
        <div className="flex justify-center w-9/12 font-fjalla text-2xl text-purple-700 mb-1">No project selected</div>}
        <div className="flex h-3/4 w-9/12 border border-gray-200 rounded-lg bg-white shadow-sm">
          <Column columnName='Backlog' tasks={backlogTasks} selectedProject={selectedProject} taskStatus='backlog' />
          <Column columnName='Doing' tasks={doingTasks} selectedProject={selectedProject} taskStatus='doing' />
          <Column columnName='Done' tasks={doneTasks} selectedProject={selectedProject} taskStatus='done' />
        </div>
      </div>
    </>
  );
}

export default ProjectBoard;
