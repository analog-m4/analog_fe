import { useSelector } from "react-redux";
import Column from "../Column/Column";

function ProjectBoard() {
  const selectedProject = useSelector((state) => state.user.selectedProject);
  const user = useSelector((state) => state.user.user.attributes);
  const appColor = useSelector((state) => state.appColor.appColor);

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
      <div className="flex flex-col w-auto h-auto ">
        {selectedProject ? (
          <></>
        ) : (
          <div className="no-project-selected flex justify-center w-9/12 font-fjalla text-3xl text-purple-700 mb-1">
            No project selected
          </div>
        )}
        <div
          className={`flex h-3/4 sm:w-11/12 md:w-10/12 border border-gray-200 rounded-lg shadow-sm pl-3 sm:pl-3 md:pl-6 ${
            appColor === "dark" ? "bg-dark" : "bg-white"
          } dark:text-darkText`}
          style={{ maxHeight: "545px", overflowY: "auto" }}
        >
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
