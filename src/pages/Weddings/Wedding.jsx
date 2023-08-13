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
      <Container>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/B_Ewb3i1IQQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </Container>

      <section>
        <Footer />
      </section>
    </section>
  );
};

export default Wedding;
