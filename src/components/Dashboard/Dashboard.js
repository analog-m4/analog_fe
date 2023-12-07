import Project from "../Project/Project";
import { useSelector } from "react-redux";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import { useState } from "react";
import WhiteBoard from "../WhiteBoard/WhiteBoard";
// import createSocket from '../utils/websocket';
import AddProject from "../AddProject/AddProject";
import FileUpload from "../FileUpload/FileUpload";

function Dashboard({ userStatus }) {
  const user = useSelector((state) => state.user.user.attributes); // get user attributes
  console.log("Current User:", user);
  // const socket = createSocket();

  const userProjects = user?.projects?.map((project) => {
    return <Project key={project.id} id={project.id} title={project.title} />;
  });

  return (
    <div className="flex h-auto">
      <div className="w-2/12 p-5 min-w-max">
        <div className="dashboard min-w-max p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="projects font-bold text-gray-900 border-b pb-1 mb-1 font-fjalla text-lg">
            Projects
          </div>
          <div className="flex flex-col">{userProjects}</div>
          <AddProject />
        </div>
        <div className="flex">
          <FileUpload />
        </div>
      </div>
      <div className="flex flex-col w-10/12">
        <div className="h-auto">
          <ProjectBoard />
          <WhiteBoard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
