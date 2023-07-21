import "./Home.css";
import Film from "../../components/Film/Film";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import film1 from "../../assets/img/film1.jpg";
import film2 from "../../assets/img/Decision-to-Leave-56.jpg";
import film3 from "../../assets/img/film3.jpg";

export const Home = () => {
  return (
    <>
      <section>
        <Film film={film2} />
      </section>

      <section className="titleContainer">
        <h2>Films</h2>

        <section className="carouselContainer">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
          <Film film={film1} />
          <FontAwesomeIcon icon={faArrowRight} className="arrow" />
        </section>

        <section className="aboutContainer">
          <h2>About</h2>
          <section className="aboutInfo">
            <p>Parallax Films is a creative agency for brands everywhere.</p>

            <Film film={film3} />
          </section>
          <a>Learn More</a>
        </section>

        <section>
            <Footer />
        </section>
      </section>
    </>
  );
};
