import { useSelector } from "react-redux";
import Column from "../Column/Column";

function ProjectBoard({ title }) {
  const user = useSelector((state) => state.user.user);
  
  return (
    <>
      <div className="flex w-10/12">
      <Column columnName='Backlog' />
      <Column columnName='Doing' />
      <Column columnName='Done' />
      </div>
    </>
  );
}

export default ProjectBoard;
