import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isOnSpecificPage = location.pathname === '/wedding';

  return (
    <section className={isOnSpecificPage ? 'footerContainer ' : 'footerContainer'}>
      <section className="logoContainer">
        <a href="/">
          Parallax <br /> Films
        </a>
      </section>
      <section className="footerLinkContainer">
        <a href="/">Home</a>
        <a href="/wedding">Weddings</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </section>
    </section>
  );
};

export default Footer;
