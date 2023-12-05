import Project from "../Project/Project";
import { useSelector } from "react-redux";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import AddProject from "../../AddProject/AddProject";
import { useDispatch } from 'react-redux';
import { setSelectedProject } from "../../reducers/user";

function Dashboard({ userStatus }) {
  const user = useSelector((state) => state.user.user);
  // console.log("Current User:", user);
  const selectedProject = useSelector((state) => state.user.selectedProject);
  // const dispatch = useDispatch();

  const userProjects = user.projects.map((project) => {
    return (
      <Project
        key={project.project_id}
        id={project.project_id}
        title={project.title}
        // onClick={() => dispatch(setSelectedProject(project))}
      />
    );
  });

  return (
    <div className="flex h-screen">
      <div className="w-2/12 p-5 min-w-max">
        <div className="dashboard min-w-max p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="projects font-bold text-gray-900 border-b pb-1 mb-1 font-fjalla text-lg">
            Projects
          </div>
          <div>{userProjects}</div>
          <AddProject />
        </div>
      </div>
      <ProjectBoard />
    </div>
  );
}

export default Dashboard;
