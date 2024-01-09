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
    <div className="flex">
      <NavLink
        to={`/project/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        activeclassname="active-link"
      >
        <div
          className={`project flex cursor-pointer hover:font-bold ${
            selectedProjectId === id ? "text-purple-600 font-bold underline" : ""
          }`}
          onClick={() => dispatch(setSelectedProject(id))}
        >
          <div
            className="project-color self-center sm:w-2 sm:h-2 md:w-3 md:h-3 border-600 p-1 mr-1 border bg-600 rounded-full"
            style={circleStyle}
          ></div>
          <div className="project-title">{title}</div>
        </div>
      </NavLink>
    </div>
  );
}

export default Project;
