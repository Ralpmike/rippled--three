import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png';
import {Stack}from '@mui/material';
import {Link} from "react-router-dom";


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Curriculum', 'Projects', 'FAQs'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider /> */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
      <AppBar component="nav">
        <Toolbar sx={{display: 'flex', flexDirection:"row", justifyContent:"space-between"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            <Box sx={{textAlign:"center", marginLeft:"90px"}}>
            <img src={logo} alt="" width={80} />
            </Box>
          </IconButton>
          <Box sx={{ mx: 5, display: { xs: 'none', sm: 'flex' } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' } }}
            // sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}
          >
                    <img src={logo} alt="" width={80} />
          </Typography>
          <Stack direction="row" spacing={{xs:"17px", sm:"28px", md:"39px"}}>

            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Stack>
          </Box>
          <Box pr={{xs:"40px", sm:"64px", md:"90px"}}>
            <Button color="inherit" > <Link to="/loginpage"> Login </Link></Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
 
  window: PropTypes.func,
};

export default DrawerAppBar;
