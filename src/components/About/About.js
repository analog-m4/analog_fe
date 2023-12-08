function About() {
  return (
    <div className="flex flex-col items-center h-1/2 justify-center gap-5 w-full">
      <div className="flex flex-col items-center">
        <div className="font-fjalla text-7xl">
          The ultimate
        </div>
          <div className="font-fjalla text-7xl">to-do list Application.</div>
      </div>
      <div className="flex font-lato text-xl items-center w-1/3 text-center">
        Manage tasks, write notes, and organize projects. Analog is the fastest
        way to get work done!
      </div>
    </div>
  );
}

export default About;
