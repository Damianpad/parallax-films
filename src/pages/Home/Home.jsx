import "./Home.css";
import Film from "../../components/Film/Film";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import film1 from "../../assets/img/film1.jpg";
import film2 from "../../assets/img/Decision-to-Leave-56.jpg";
import film3 from "../../assets/img/film3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <section className="filmContainer">
        <Container>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/-B6zY6ww_5w"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </section>

      <section className="titleContainer">
        <h2>Films</h2>

        <section className="carouselContainer">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
          <Container>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/WcGFKH5ZtcE"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
          <FontAwesomeIcon icon={faArrowRight} className="arrow" />
        </section>

        <section className="aboutContainer">
          <h2>About</h2>
          <section className="aboutInfo">
            <p>Parallax Films is a creative agency for brands everywhere.</p>

            <Container>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/no2_4dtmuJ4"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </Container>

          </section>
          <a href="/about">Learn More</a>
        </section>

        <section>
          <Footer />
        </section>
      </section>
    </>
  );
};
