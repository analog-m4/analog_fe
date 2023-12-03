import { useState } from "react";
import { NavLink } from "react-router-dom";

function Project({ title, id, onClick }) {
  return (
    <div className="project flex gap-1 cursor-pointer" onClick={onClick}>
      <NavLink to={`/project/${id}`} className="nav-link">
        <div className="project-color self-center w-2.5 h-2.5 border-purple-600 border bg-purple-600 rounded-full"></div>
        <div>{title}</div>
      </NavLink>
    </div>
  );
}

export default Project;
