import "./Footer.css";

const Footer = () => {
  return (
    <section className="footerContainer">
      <section className="logoContainer">
        <a href="/">
          Parallax <br /> Films
        </a>
      </section>
      <section className="linkContainer">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </section>
    </section>
  );
};

export default Footer;
