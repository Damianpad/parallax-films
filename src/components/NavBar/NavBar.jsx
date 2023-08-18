import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import  Logo  from "../../../public/img/NewParallaxLogoWIP3.png"



const NavBar = () => {
  const location = useLocation();

  const isOnSpecificPage = location.pathname === '/wedding';

  return (
    <section className={isOnSpecificPage ? 'white-background navContainer' : 'mainContainer'}>
      <section className="logoContainer">
        <NavLink to="/" className={"logo"}>
          <img src={ Logo } alt="" />
        </NavLink>
        <FontAwesomeIcon icon={faBars} size="4x" fixedWidth className="bars"/>
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
    </ section>
  );
};

export default NavBar;
