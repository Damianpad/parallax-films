import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <section className="mainContainer">
      <section className="logoContainer">
        <NavLink to="/home" className={"logo"}>
          Parallax <br />Films
        </NavLink>
        <FontAwesomeIcon icon={faBars} size="4x" fixedWidth className="bars"/>
      </section>

      {/* <section className="linkContainer">
        <NavLink to="/home" className={"link"}>
          Films
        </NavLink>
      </section>

      <section className="linkContainer">
        <NavLink to="/home" className={"link"}>
          About
        </NavLink>
        <NavLink to="/home" className={"link"}>
          Contact
        </NavLink>
      </section> */}
    </ section>
  );
};

export default NavBar;
