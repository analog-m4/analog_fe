import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { postProject } from "../../apiCalls";

function AddProject() {
  const currentUserId = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();

  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setNewProjectTitle("");
    setNewProjectDescription("");
  };

  const randomHexCode = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      let hexDigit = Math.floor(Math.random() * 16).toString(16);
      hexColor += hexDigit;
    }
    return hexColor;
  };

  const handleAddProject = () => {
    // dispatch(addProjectToUser({
    //   // project_id: uuidv4(), // random uuid
    //   title: newProjectTitle,
    //   description: newProjectDescription,
    //   tasks: [],
    // }));
    console.log("Current User ID:", currentUserId);
    postProject(
      currentUserId,
      newProjectTitle,
      newProjectDescription,
      randomHexCode(),
      "2023-12-31",
      dispatch
    );
    handleClose();
  };

  return (
    <>
      <div
        className="add-project-btn flex text-gray-400 font-light text-sm items-center cursor-pointer mt-2"
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="2 0 30 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-6 text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Add Project
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // dispatch(
              //   addTaskToProject({
              //     task_id: uuidv4(), // random uuid
              //     title: newTaskTitle,
              //     description: newTaskDescription,
              //     status: taskStatus,
              //   })
              // );
              // INSERT POST REQUEST
              handleAddProject();
              handleClose();
            }}
            id="add-project"
            className="w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="new-task-title"
                >
                  Title
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="new-project-title"
                  type="text"
                  placeholder="Project Title"
                  value={newProjectTitle}
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="new-task-title"
                >
                  Description
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="new-project-description"
                  type="text"
                  placeholder="Project Description"
                  value={newProjectDescription}
                  onChange={(e) => setNewProjectDescription(e.target.value)}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
          {/* <Button onClick={handleAddProject}>Add Project</Button> */}
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="add-project"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;
