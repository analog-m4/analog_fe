import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../../reducers/user";

function Project({ title, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <NavLink to={`/project/${id}`}>
        <div className="project flex gap-1 cursor-pointer" onClick={() => dispatch(setSelectedProject(id))}>
          <div className="project-color self-center w-2.5 h-2.5 border-purple-600 border bg-purple-600 rounded-full"></div>
          <div>{title}</div>
        </div>
      </NavLink>
    </>
  );
}

export default Project;
