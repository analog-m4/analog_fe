import Header from "../Header/Header";
import Project from "../Project/Project";
import { useSelector } from "react-redux";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import { useState } from "react";
import WhiteBoard from "../WhiteBoard/WhiteBoard";
import { createSocket } from '../utils/websocket'; // Correct import path



function Dashboard({ userStatus }) {
  const user = useSelector((state) => state.user.user);
  // console.log("Current User:", user);
  const [selectedProject, setSelectedProject] = useState(null);

  const socket = createSocket();

  const userProjects = user.projects.map((project) => {
    return (
      <Project
        key={project.project_id}
        id={project.project_id}
        title={project.title}
        onClick={() => setSelectedProject(project)}
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
          <div className="add-project-btn flex text-gray-400 font-light text-sm items-center cursor-pointer mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="2 0 30 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Project
          </div>
        </div>
      </div>
      <WhiteBoard socket={socket}/>
      <ProjectBoard selectedProject={selectedProject} />
    </div>
  );
}

export default Dashboard;
