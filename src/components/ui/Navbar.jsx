import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PortContext } from "../content/PortContext";
import Boton from "./Boton";
import "./navbar.css";
import "./aside.css";

export const Navbar = () => {
  const { cerrarToggle, navbarMobile } = useContext(PortContext);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link className="navbar-brand" to="/">
          HeroesApp
        </Link>
        <Boton />
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <Link className={"nav-item nav-link"} to="/marvel">
              Marvel
            </Link>
            <Link className={"nav-item nav-link"} to="/dc">
              DC
            </Link>
            <Link className={"nav-item nav-link"} to="/search">
              Search
            </Link>
          </div>
        </div>
        <aside className={`aside ${navbarMobile}`}>
            <Link to="/marvel" className="a" onClick={cerrarToggle}>Marvel</Link>
            <Link to="/dc" className="a" onClick={cerrarToggle}>DC</Link>
            <Link to="/search" className="a" onClick={cerrarToggle}>Search</Link>
        </aside>
      </nav>
    </>
  );
};
