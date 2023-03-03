import React from "react";
import { NavLink } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

/*MUI App Bar imports*/
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


function NavTabs(props) {

  //This uses UseState hook which returns an array with the variable menuOpen which is false and the function setMenuOpen which updates the useState variable, as the state is false the burger menu is closed. The function when called will update the menuOpen state to true (open) or false (closed)//
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(useState(false));

  //When this function is called, it sets the variable menuOpen state to true(open)//
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  //When this function is called, it sets the variable menuOpen state to false(closed)//
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#343434" }}>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            VINH_LA
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuOpen}//Opens the burger menu//
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
   

          <Box
            component="nav"
            sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#343434" }}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{
                backgroundColor: "#343434",
                display: { xs: "none", sm: "flex" }, // hide on mobile but show on desktop when the viewport is smallest to hide the other menu options//
              }}
            >
              <Button
                component={NavLink}
                to="/reactPortfolio/"
                end
                activeClassName="active"
                sx={{ p: 2, color: "#fff", backgroundColor: "#343434", borderColor: "#343434!important"}}
              >
                Home
              </Button>
              <Button
                component={NavLink}
                to="/reactPortfolio/"
                end
                activeClassName="active"
                sx={{ p: 2, color: "#fff", backgroundColor: "#343434", borderColor: "#343434!important" }}
              >
                Project
              </Button>
              <Button
                component={NavLink}
                to="/reactPortfolio/"
                end
                activeClassName="active"
                sx={{ p: 2, color: "#fff", backgroundColor: "#343434", borderColor: "#343434!important" }}
              >
                Blog
              </Button>
              <Button
                component={NavLink}
                to="/reactPortfolio/"
                end
                activeClassName="active"
                sx={{ p: 2, color: "#fff", backgroundColor: "#343434", borderColor: "#343434" }}
              >
                Contact
              </Button>
            </ButtonGroup>
          </Box>
        
          <Menu
         anchorEl={menuOpen}
         open={menuOpen}
         onClose={handleMenuClose}
         //When a menu item is clicked the burger menu will close//
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Project</MenuItem>
            <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavTabs;
