import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import AddNew from './AddNew';
import { Card, CardActionArea, CardHeader } from '@mui/material'
import { RootState } from '../store';

function Home() {
  const palettes = useSelector((state: RootState) => state.foobar.value)

  return (
    <div>
      <div><AddNew /></div>
      <div className="color--grid">
        {palettes.map((palette) => (
          <Card className="color--box" variant="outlined" key={palette.id}>
            <CardActionArea>
              <NavLink to={`/palette/${palette.id}`}>
                <CardHeader
                  title={palette.title}
                />
                <div className="color--pane__container">

                  {palette.colors.map((color, index) => (<div className="color--pane" key={index} style={{ background: `${color.hex}` }}></div>))}

                </div>
              </NavLink>
            </CardActionArea>
          </Card>
        ))}

      </div>
    </div>
  )
};

export default Home;