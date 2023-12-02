import { useSelector } from "react-redux";

function ProjectBoard({ title }) {
  const user = useSelector((state) => state.user.user);
  
  return (
      <div className="flex w-10/12">it worked</div>
  );
}

export default ProjectBoard;
