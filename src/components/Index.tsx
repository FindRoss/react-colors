import { NavLink } from "react-router-dom";

import { AppBar, Typography, Toolbar } from '@mui/material';

const useStyles = {
  nav: {
    marginBottom: '1rem'
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  layout: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

function Index() {

  return (
    <AppBar style={useStyles.nav} position="static">
      <Toolbar style={useStyles.layout}>
        <Typography variant="h6">
          <NavLink style={useStyles.link} to="/">React Colors</NavLink>
        </Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Index;
