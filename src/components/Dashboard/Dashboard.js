import Header from "../Header/Header";

function Dashboard({ user, userStatus }) {
  console.log("Current User:", user);

  const userProjects = user.projects.map((project) => {
    return <p>{project.title}</p>;
  });

  return (
    <div className="dashboard flex-col h-60">
      <Header userStatus={userStatus} user={user} />
      <div className="projects flex flex-col w-2/12 bg-gray-200 rounded-lg">
        <div className="font-bold">Projects</div>
        <div>{userProjects}</div>
      </div>
    </div>
  );
}

export default Dashboard;
