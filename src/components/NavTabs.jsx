import React from "react";
import { NavLink } from "react-router-dom";

/*MUI App Bar imports*/

function NavTabs(props) {

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/reactPortfolio/home"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/reactPortfolio/project"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            project
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/reactPortfolio/blog"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/reactPortfolio/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
