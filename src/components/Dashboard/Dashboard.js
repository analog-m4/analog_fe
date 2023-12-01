function Dashboard({ user }) {
  console.log('Current User:', user)

  const userProjects = user.projects.map((project) => project.title)

  return (
    <div className="dashboard flex h-60">
      <div className="projects flex flex-col w-2/12 bg-gray-200 rounded-lg">
        <div className="font-bold">Projects</div>
        <p>- {userProjects}</p>
      </div>
    </div>
  );
}

export default Dashboard;
