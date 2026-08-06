import { useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";

import uuid from 'react-uuid'
import { getRandomColor } from '../randomColor'

import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { addPalette } from '../features/helpers';

const addNewCont = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '1rem'
};

function AddNew() {
  const dispatch = useDispatch();

  function handleAddNew() {
    const newId = uuid();

    dispatch(addPalette({
      id: newId,
      title: 'Untitled',
      colors: [
        {
          hex: getRandomColor()
        },
        {
          hex: getRandomColor()
        },
        {
          hex: getRandomColor()
        }
      ]
    }));

    // return <Redirect push to={`/palette/${newId}/`} />;
    // return history.push(`/palette/${newId}`);
    return <Navigate replace to={`/palette/${newId}/`} />;
  }

  return (
    <div style={addNewCont}>
      <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleAddNew}>Add New</Button>
    </div>
  )
}

export default AddNew;
