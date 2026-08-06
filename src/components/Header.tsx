import { NavLink } from "react-router-dom";
import { AppBar, Typography, Toolbar } from '@mui/material';

function Header() {

  return (
    <AppBar className="header" position="static">
      <Toolbar className="header-layout">
        <Typography variant="h6">
          <NavLink className="header-link" to="/">React Colors</NavLink>
        </Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Header;