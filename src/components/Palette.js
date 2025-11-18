import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Pane from './Pane'
import { updateTitle, addPane } from '../features/helpers';
import { getRandomColor } from '../randomColor'

import { IconButton, TextField, Button, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

function Palette() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const palette = useSelector((state) => state.foobar.value.filter(pal => pal.id === id)[0]);
  const { title, colors } = palette;

  const [inputTitle, updateInputTitle] = useState("")
  const [showTitle, setShowTitle] = useState(true)

  function handleTitleSubmit(e) {
    e.preventDefault();
    dispatch(updateTitle({ id, title: inputTitle }));
    setShowTitle(true)
  }

  function handleAddPane() {
    const newColor = getRandomColor();
    dispatch(addPane({ id, color: newColor }))
  }


  if (palette) {
    return (
      <>
        <div className="color--palette">
          {showTitle ? (
            <div className="title-layout">
              <Typography className="title" component="h1" variant="h5">{title}</Typography>
              {/* Was IconButton */}
              <IconButton onClick={() => setShowTitle(false)} aria-label="delete">
                <EditIcon />
              </IconButton>
            </div>
          ) : (
            <div className="title-layout">
              <form onSubmit={handleTitleSubmit}>
                <TextField
                  variant="outlined"
                  type="text"
                  classNane="title-input"
                  value={inputTitle}
                  label="title"
                  size="small"
                  onChange={(e) => updateInputTitle(e.target.value)} />
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  type="submit"
                >Update</Button>
              </form>
            </div>
          )}
          {colors.map((color, index) => (
            <Pane
              key={index}
              index={index}
              color={color.hex}
              id={id}
            />
          )
          )}
        </div>
        <div className="addNewBox">
          <IconButton onClick={handleAddPane} className="addNewBtn">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </>
    )
  } else {
    return (
      <div>No palette found, sorry.</div>
    )
  }
}

export default Palette;