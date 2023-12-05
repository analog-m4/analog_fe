import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToProject } from '../../reducers/user';
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddTask({ taskStatus }) {
  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.user.selectedProject);
  const [open, setOpen] = React.useState(false);
  const [newTaskTitle, setNewTaskTitle] = React.useState('');
  const [newTaskDescription, setNewTaskDescription] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewTaskTitle('');
    setNewTaskDescription('');
  }

  const handleAddTask = () => {
    console.log("Adding task:", newTaskTitle, newTaskDescription, taskStatus)
    dispatch(addTaskToProject({
      newTask: {
        task_id: uuidv4(), // random uuid
        title: newTaskTitle,
        description: newTaskDescription,
        status: taskStatus, 
      },
    }));
    handleClose();
  }

  return (
    <div className="add-task-btn flex text-gray-400 text-sm items-center cursor-pointer mt-3 pl-3" onClick={handleOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 text-green-400 mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
     Add Task
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Task
          </Typography>
          <input
            type="text"
            placeholder="Task Title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <Button onClick={handleAddTask}>Add Task</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default AddTask;