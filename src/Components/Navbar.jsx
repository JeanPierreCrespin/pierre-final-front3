import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes.js";
import { useDentistStates } from "./utils/global.context.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { themeState, themeDispatch } = useDentistStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_DARK" });
    } else {
      themeDispatch({ type: "SWITCH_LIGHT" });
    }
  };

  return (
    <nav>
      <div className="odonto-logo">
        <h2 className="logo-d">Dental</h2>
        <h2>Las Rosas</h2>
      </div>
      <div className="nav-links">
        <Link to={routes.home}>
          <h3>Inicio</h3>
        </Link>
        <Link to={routes.contact}>
          <h3>Contact</h3>
        </Link>
        <Link to={routes.favs}>
          <h3>Favorites</h3>
        </Link>
        <div>
          <button onClick={switchTheme} className="btn-theme">
            {themeState.theme ?<FontAwesomeIcon icon={faMoon} size="2xl" style={{fontSize:"40px"}} />:<FontAwesomeIcon icon={faSun} size="2xl" style={{color: "#deff38",fontSize:"40px"}} /> }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
