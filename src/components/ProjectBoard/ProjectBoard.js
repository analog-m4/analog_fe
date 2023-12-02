import { useSelector } from "react-redux";

function ProjectBoard({ title }) {
  const user = useSelector((state) => state.user.user);
  
  return (
    <>
      <p>it worked</p>
    </>
  );
}

export default ProjectBoard;
