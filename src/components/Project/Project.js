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
            className="project-color self-center sm:w-4 sm:h-4 md:w-4 md:h- p-1 mr-1 rounded-full"
            style={circleStyle}
          ></div>
          <div className="project-title">{title}</div>
        </div>
      </NavLink>
    </div>
  );
}

export default Project;
