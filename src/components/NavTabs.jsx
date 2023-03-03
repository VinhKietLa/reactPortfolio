import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

/*MUI App Bar imports*/
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function NavTabs(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            VINH_LA
          </Typography>

          <Box
            component="nav"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>
                {" "}
                <NavLink
                  to="/reactPortfolio/"
                  end
                  activeClassName="active"
                  sx={{ p: 2 }}
                >
                  Home
                </NavLink>
              </Button>
              <Button>
                {" "}
                <NavLink
                  to="/reactPortfolio/project"
                  activeClassName="active"
                  sx={{ p: 2 }}
                >
                  Project
                </NavLink>
              </Button>
              <Button>
                {" "}
                <NavLink
                  to="/reactPortfolio/blog"
                  activeClassName="active"
                  sx={{ p: 2 }}
                >
                  Blog
                </NavLink>
              </Button>
              <Button>
              <NavLink
                to="/reactPortfolio/contact"
                activeClassName="active"
                sx={{ p: 2 }}
              >
                Contact
                
              </NavLink>
              </Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>

      {/* <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/reactPortfolio/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/reactPortfolio/project"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          project
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/reactPortfolio/blog"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/reactPortfolio/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul> */}
    </>
  );
}

export default NavTabs;
