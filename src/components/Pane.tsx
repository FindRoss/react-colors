import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deletePane, updateColor } from '../features/helpers';

import { getRandomColor } from '../randomColor'

import { IconButton, TextField, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



const useStyles = {
  roundButton: {
    background: '#FFFFFF',
    color: '#000000',
    border: '1px solid #000',
    marginLeft: 3,
    '&:hover': {
      background: '#F4F4F4'
    },
  },
  hexBox: {
    display: 'flex'
  },
  hex: {
    background: '#FFFFFF',
    border: '1px solid #000',
    borderRadius: 6,
    marginRight: 6,
    padding: '6px 10px',
    minWidth: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  copyHex: {
    background: '#FFFFFF',
    border: '1px solid #000',
    borderRadius: 6,
    padding: '6px 10px',
    '&:hover': {
      background: '#F4F4F4'
    },
  },
  tools: {
    fontSize: 16,
    fontWeight: 300,
  },
  inputRoot: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    border: '1px solid #000',
    marginRight: 6,
    maxWidth: 110,
    color: '#000000'
  }
}

type PaneProps = {
  color: string;
  index: number;
  id: string;
};

function Pane({ color, index, id }: PaneProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>(color);
  const dispatch = useDispatch();

  useEffect(() => {
    setBgColor(color);
  }, [color]);

  function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(function () {
      setTimeout(() => setOpen(false), 1500)
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  };

  function handleCopy() {
    copyTextToClipboard(bgColor);
    setOpen(true);
  };

  function handleDeletePane() {
    dispatch(deletePane({ id, index }))
  };

  function handleColorChange() {
    const randomColor = getRandomColor();
    dispatch(updateColor({ id, index, color: randomColor }))
  };

  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    setBgColor(e.target.value);
  };

  function handleFieldBlur() {
    dispatch(updateColor({ id, index, color: bgColor }));
  };

  return (
    <>
      <div
        style={{backgroundColor: `${bgColor}`}}
        className="color--pane">
        <div className="color--pane__content">
          <div style={useStyles.hexBox}>
            <TextField
              inputProps={{ maxLength: 7 }}
              variant="outlined"
              placeholder="#F7F7F7"
              value={bgColor}
              style={useStyles.inputRoot}
              onChange={handleFieldChange}
              onBlur={handleFieldBlur}
            />
            <Tooltip
              style={useStyles.tools}
              title="Copied!"
              placement="top"
              open={open}
            >
              <IconButton onClick={handleCopy} style={useStyles.copyHex}>
                <ContentCopyIcon style={{ color: '#000' }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="color--pane__icon-set">
            <IconButton
              style={useStyles.roundButton}
              onClick={handleDeletePane}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              style={useStyles.roundButton}
              onClick={handleColorChange}
            >
              <AutorenewIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pane; 
