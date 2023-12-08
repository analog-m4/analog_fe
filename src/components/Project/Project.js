import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProject } from "../../reducers/user";

function Project({ title, id, color }) {
  const circleStyle = {
    backgroundColor: `${color}`,
    borderColor: `${color}`,
  };

  const dispatch = useDispatch();
  const selectedProjectId = useSelector((state) => state.user.selectedProject);

  return (
    <>
      <NavLink
        to={`/project/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        activeClassName="active-link"
      >
        <div
          className={`project flex gap-1 cursor-pointer hover:font-bold ${
            selectedProjectId === id ? "text-purple-600 font-bold underline" : ""
          }`}
          onClick={() => dispatch(setSelectedProject(id))}
        >
          <div
            className="project-color self-center w-3 h-3 border-600 border bg-600 rounded-full"
            style={circleStyle}
          ></div>
          <div>{title}</div>
        </div>
      </NavLink>
    </>
  );
}

export default Project;
