import { useSelector } from "react-redux";
import Column from "../Column/Column";
import Task from "../Task/Task";

function ProjectBoard({ selectedProject }) {
  const user = useSelector((state) => state.user.user);
  
  // const projectTasks = user.projects.tasks.map((task) => {
  //   return <Task key={task.id} title={task.title} />;
  // })

  return (
    <>
      <div className="flex flex-col w-10/12">
        {selectedProject ? <p>{selectedProject.title}</p> : <p>No project selected</p>}
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
