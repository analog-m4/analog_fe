import { useSelector } from "react-redux";
import Column from "../Column/Column";

function ProjectBoard() {
  const selectedProject = useSelector((state) => state.user.selectedProject);
  const user = useSelector((state) => state.user.user.attributes);

  console.log("Selected Project:", selectedProject);

  const project = selectedProject
    ? user.projects.find((project) => project.id === selectedProject)
    : null;

  const projectTasks = project ? project.tasks : [];

  console.log("Project Tasks:", projectTasks);

  const backlogTasks = projectTasks.filter((task) => task.status === "backlog");
  const doingTasks = projectTasks.filter((task) => task.status === "doing");
  const doneTasks = projectTasks.filter((task) => task.status === "done");

  return (
    <>
      <div className="flex flex-col w-auto h-auto">
        {selectedProject ? (
          <div className="flex justify-between w-9/12 pl-1 pr-2 font-fjalla text-2xl text-purple-600 mb-1">
            {project.title}
            <div className="text-gray-900 self-end text-lg italic">
              Project Board
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-9/12 font-fjalla text-2xl text-purple-700 mb-3">
            No project selected
          </div>
        )}
        <div className="flex h-3/4 w-9/12 border border-gray-200 rounded-lg bg-white shadow-sm">
          <Column
            columnName="Backlog"
            tasks={backlogTasks}
            taskStatus="backlog"
          />
          <Column columnName="Doing" tasks={doingTasks} taskStatus="doing" />
          <Column columnName="Done" tasks={doneTasks} taskStatus="done" />
        </div>
      </div>
    </>
  );
}

export default ProjectBoard;
