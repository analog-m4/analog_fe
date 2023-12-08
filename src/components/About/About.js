import BuiltWith from "../BuiltWith/BuiltWith";

function About() {
  return (
    <div className="flex flex-col items-center pt-4 gap-5 w-7/12">
      <div className="flex flex-col items-center">
        <div className="font-fjalla text-7xl text-center">The ultimate</div>
        <div className="font-fjalla text-7xl text-center">
          to-do list application.
        </div>
      </div>
      <div className="flex font-lato text-xl items-center w-1/2 text-center">
        Manage tasks, write notes, and organize projects. Analog is the fastest
        way to get work done!
      </div>
      <BuiltWith />
    </div>
  );
}

export default About;
