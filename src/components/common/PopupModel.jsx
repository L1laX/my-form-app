import * as React from 'react';
import Box from '@mui/material/Box';
import Button from './Button';
import Modal from '@mui/material/Modal';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  name,
  inputs,
  state,
  setterFucntion,
  height,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id: uuidv4() };
    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = e.target[i];
      data[name] = value;
    }
    setterFucntion([...state, data]);
    handleClose();
  };
  height ? (style.height = height) : null;
  return (
    <div>
      <Button
        name={name}
        className="text-color mx-auto xl:ml-[30rem] appearance-none bg-white border-teal-500 border-2 hover:border-teal-700 hover:text-white"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            {inputs.map((item, index) => {
              return (
                <div key={index} className="mt-2">
                  <label htmlFor={item.name} className="text-sm ml-3">
                    {item.label}
                  </label>
                  <Input
                    name={item.name}
                    type={item.type}
                    className="mt-2"
                    max={item.name === 'level' ? 10 : ''}
                  />
                </div>
              );
            })}
            <div className="button-section flex justify-center">
              <Button name={'SUBMIT'} className={' mt-7'}></Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
