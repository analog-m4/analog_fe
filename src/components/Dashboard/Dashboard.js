import Header from "../Header/Header";
import Project from "../Project/Project";
import { useSelector } from "react-redux";

function Dashboard({ userStatus }) {
  const user = useSelector((state) => state.user.user);
  // console.log("Current User:", user);

  const userProjects = user.projects.map((project) => {
    return <Project key={project.id} title={project.title} />; // return <p>{project.title}</p>;
  });

  return (
    <div className="dashboard flex-col h-60">
      <Header userStatus={userStatus} />
      <div className="projects flex flex-col w-2/12 bg-gray-200 rounded-lg">
        <div className="font-bold">Projects</div>
        <div>{userProjects}</div>
      </div>
    </div>
  );
}

export default Dashboard;
