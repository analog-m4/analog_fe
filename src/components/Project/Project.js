import { useState } from 'react';

function Project({ title, onClick }) {

  return (
    <div className="project">
      <button onClick={onClick}>{title}</button>
    </div>
  );
}

export default Project;
