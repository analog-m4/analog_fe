import { useSelector } from "react-redux";
import Column from "../Column/Column";
import Task from "../Task/Task";

function ProjectBoard({ selectedProject }) {
  const user = useSelector((state) => state.user.user);
  
  const projectTasks = selectedProject ? (
    selectedProject.tasks.map((task) => (
      <Task key={task.id} title={task.title} description={task.description} />
    ))
  ) : null;
  
  console.log(selectedProject)

  return (
    <>
      <div className="flex flex-col w-10/12">
        {selectedProject ? <p>{selectedProject.title}</p> : <p>No project selected</p>}
        {projectTasks}
        <div className="flex h-full">
          <Column columnName='Backlog' />
          <Column columnName='Doing' />
          <Column columnName='Done' />
        </div>
      </div>
    </>
  );
}

export default ProjectBoard;
