import "./Film.css";
import React from "react";
import { Player } from "video-react";
import VideoPlayer from "react-video-js-player";
import WeddingHighlight from "../../assets/video/ParallaxFilmsWEdding.mp4";
import { useLocation } from "react-router-dom";

const Film = (props) => {
  const location = useLocation();
  const isOnWeddingPage = location.pathname === "/wedding";

  const videoSrc = WeddingHighlight;
  const poster = "src/assets/img/parallax_couple.png";
  return (
    <section  className={isOnWeddingPage ? "white-background filmContainer" : " "}>
      {/* <span>Video title 1</span> */}
      {/* <img src={props.film} /> */}
      <video controls>
        <source
          src={videoSrc}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Film;
