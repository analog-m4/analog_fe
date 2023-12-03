import { useState } from 'react';

function Project({ title, onClick }) {

  return (
    <div className="project flex gap-1 cursor-pointer" onClick={onClick}>
      <div className='project-color self-center w-2.5 h-2.5 border-purple-600 border bg-purple-600 rounded-full'></div>
        <div>{title}</div>
    </div>
  );
}

export default Project;
