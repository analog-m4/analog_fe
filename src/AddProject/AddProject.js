import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { addProjectToUser } from '../reducers/user';

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

function AddProject() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [newProjectTitle, setNewProjectTitle] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewProjectTitle('');
  }
  
  const handleAddProject = () => {
    dispatch(addProjectToUser({ title: newProjectTitle }));
    handleClose();
  }

  return (
    <div className="add-project-btn flex text-gray-400 font-light text-sm items-center cursor-pointer mt-3" onClick={handleOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="2 0 30 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-6 text-green-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    Add Project
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Project
          </Typography>
          <input
            type="text"
            placeholder="Project Title"
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
          />
          <Button onClick={handleAddProject}>Add Project</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default AddProject;