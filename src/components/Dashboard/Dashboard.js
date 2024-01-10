import Project from "../Project/Project";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectBoard from "../ProjectBoard/ProjectBoard";
import WhiteBoard from "../WhiteBoard/WhiteBoard";
// import createSocket from '../utils/websocket';
import AddProject from "../AddProject/AddProject";
import FileUpload from "../FileUpload/FileUpload";

function Dashboard({ userStatus }) {
  const appColor = useSelector((state) => state.appColor.appColor);
  console.log("appColor in dashboard", appColor);

  const user = useSelector((state) => state.user.user.attributes); // get user attributes
  console.log("Current User:", user);
  // const socket = createSocket();

  const userProjects = user?.projects?.map((project) => {
    return (
      <Project
        key={project.id}
        id={project.id}
        title={project.title}
        color={project.color}
      />
    );
  });

  return (
    <div className={appColor}>
      <div className={`sm:flex h-auto w-full`}>
        <div className={`sm:w-1/4 md:w-3/12 sm:ml-5 sm:mr-5`}>
          {/* this line */}
          <div
            className="dashboard w-full p-3 light:bg-white dark:bg-darkBG2 dark:text-darkText border border-gray-200 rounded-lg shadow-sm "
            style={{ maxHeight: "545px", overflowY: "auto" }}
          >
            <div className="projects font-bold text-gray-900 border-b pb-1 mb-1 font-fjalla text-xl dark:text-darkText">
              Projects
            </div>
            <div className="project-buttons flex flex-col">{userProjects}</div>
            <AddProject />
          </div>
          <div className="flex">
            <FileUpload />
          </div>
        </div>
        <div className="flex flex-col sm:w-9/12">
          <div className="h-auto">
            <ProjectBoard />
            <WhiteBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
