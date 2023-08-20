import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Logo from "../../../public/img/NewParallaxLogoWIP3.png";

const NavBar = () => {
  const location = useLocation();
  const isOnSpecificPage = location.pathname === "/wedding";

  const [toggleNav, setToggleNav] = useState(false);

  const toggleState = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <section
      className={
        isOnSpecificPage ? "white-background navContainer" : "mainContainer"
      }
    >
      <section className="mainLogoContainer">
        <NavLink to="/" className={"logo"}>
          <img src={Logo} alt="" />
        </NavLink>

        <NavLink
          className={toggleNav ? "hamburger close" : "hamburger"}
          onClick={toggleState}
        >
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
        </NavLink>

        <nav
          className={
            toggleNav
              ? "mobile-nav-container mobile-height"
              : "mobile-nav-container"
          }
        >
          {toggleNav && (
            <nav className="nav-width">
              <NavLink
                className="mobile-nav toggleNav && 'active'"
                to="/"
                onClick={toggleState}
              >
                Home
              </NavLink>

              <NavLink
                className="mobile-nav"
                to="/wedding"
                onClick={toggleState}
              >
                Weddings
              </NavLink>

              <NavLink
                className="mobile-nav"
                to="/about"
                onClick={toggleState}
              >
                About
              </NavLink>

              <NavLink className="mobile-nav" to="/contact" onClick={toggleState}>
                Contact
              </NavLink>
            </nav>
          )}
        </nav>
      </section>

      <section className="linkContainer">
        <NavLink to="/home" className={"link"}>
          Films
        </NavLink>
      </section>

      <section className="linkContainer">
        <NavLink to="/wedding" className={"link"}>
          Weddings
        </NavLink>
        <NavLink to="/about" className={"link"}>
          About
        </NavLink>
        <NavLink to="/contact" className={"link"}>
          Contact
        </NavLink>
      </section>
    </section>
  );
};

export default NavBar;
