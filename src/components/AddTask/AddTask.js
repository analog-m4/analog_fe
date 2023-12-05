import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToProject } from '../../reducers/user';
import { v4 as uuidv4 } from 'uuid';

function AddTask({ taskStatus }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setNewTaskTitle('');
    setNewTaskDescription('');
  }

  const handleAddTask = () => {
    console.log("Adding task:", newTaskTitle, newTaskDescription, taskStatus)
    dispatch(addTaskToProject({
        task_id: uuidv4(), // random uuid
        title: newTaskTitle,
        description: newTaskDescription,
        status: taskStatus, 
    }));
    handleClose();
  }

  return (
    <div className="add-task-btn flex text-gray-400 text-sm items-center cursor-pointer pl-3 pb-3" onClick={handleOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 text-green-400 mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
     Add Task
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="title"
            type="text"
            placeholder="Task Title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="description"
            type="text"
            placeholder="Task Description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddTask}
            >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddTask;