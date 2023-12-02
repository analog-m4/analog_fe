import Header from "../Header/Header";
import Project from "../Project/Project";
import { useSelector } from "react-redux";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import { useState } from "react";

function Dashboard({ userStatus }) {
  const user = useSelector((state) => state.user.user);
  // console.log("Current User:", user);
  const [selectedProject, setSelectedProject] = useState(null);

  const userProjects = user.projects.map((project) => {
    return (
      <Project 
        key={project.id} 
        title={project.title} 
        onClick={() => setSelectedProject(project)}
      />
    );
  });

  return (
    <div className="flex h-screen">
      <div className="w-2/12 p-5 min-w-max">
        <div className="dashboard min-w-max p-3 bg-gray-200 rounded-lg">
          <div className="projects font-bold">Projects</div>
          <div>{userProjects}</div>
        </div>
      </div>
        <ProjectBoard selectedProject={selectedProject} />
    </div>
  );
}

export default Dashboard;
