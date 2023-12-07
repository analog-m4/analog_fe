import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../../reducers/user";

function Project({ title, id, color }) {
  const circleStyle = {
    backgroundColor: `${color}`,
    borderColor: `${color}`,
  };

  const dispatch = useDispatch();
  return (
    <>
      <NavLink to={`/project/${id}`}>
        <div
          className="project flex gap-1 cursor-pointer "
          onClick={() => dispatch(setSelectedProject(id))}
        >
          <div
            className="project-color self-center w-2.5 h-2.5 border-600 border bg-600 rounded-full"
            style={circleStyle}
          ></div>
          <div>{title}</div>
        </div>
      </NavLink>
    </>
  );
}

export default Project;
