import Header from "../Header/Header";
import Project from "../Project/Project";
import { useSelector } from "react-redux";
import ProjectBoard from "../ProjectBoard/ProjectBoard";

function Dashboard({ userStatus }) {
  const user = useSelector((state) => state.user.user);
  // console.log("Current User:", user);

  const userProjects = user.projects.map((project) => {
    return <Project key={project.id} title={project.title} />; // return <p>{project.title}</p>;
  });

  return (
    <div className="flex h-screen">
      <div className="w-2/12 p-5">
        <div className="dashboard p-3 bg-gray-200 rounded-lg">
          <div className="projects font-bold">Projects</div>
          <div>{userProjects}</div>
        </div>
      </div>
        <ProjectBoard />
    </div>
  );
}

export default Dashboard;
