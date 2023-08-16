import { useLocation } from "react-router-dom";
import Film from "../../components/Film/Film";
import "./Wedding.CSS";
import Footer from "../../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Wedding = () => {
  const location = useLocation();

  const isOnSpecificPage = location.pathname === "/wedding";
  return (
    <section
      className={isOnSpecificPage ? "white-background weddingContainer" : ""}
    >
      {/* <Container>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/B_Ewb3i1IQQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </Container> */}
      
      <section className="weddingTitleContainer">
        <h2>Turning Moments into Memories</h2>
      </section>

      <section className="aboutWeddingFilms">
        <h2>Wedding Films</h2>
      <Film className="videoContainer"/>
        <p>
          Your love story deserves to be captured in all its beauty. Our wedding
          videography services ensure every glance, every laugh, every tear is
          preserved for a lifetime. Let us create a cinematic masterpiece for
          your special day.
        </p>
        <p>We believe that every couple has a unique and beautiful story to tell. With an unwavering commitment to preserving your cherished moments, we expertly capture the laughter, tears, and the unspoken connections that make your day extraordinary. From the tender glances to the grand celebrations, we weave each moment into a cinematic masterpiece that will transport you back to those magical moments every time you watch. Let us turn your love story into a timeless work of art.</p>
      </section>

      <section className="featureFilmContainer">
        <h2>Films</h2>
        <Film className="videoContainer" />
      </section>

      

      <section className="ctaContainer">
        <h3>Follow Us on Instagram</h3>
        <section className="socialContainer">
          <a href="https://www.instagram.com/filmparallax.co/" target="_blank"><img src="src\assets\img\parallax_social.jpg" alt="" /></a>
          
        </section>
        
      </section>

      <section className="weddingFooter">
        <Footer />
      </section>
    </section>
  );
};

export default Wedding;
