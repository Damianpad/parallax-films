import "./Film.css";
import React from "react";
import { Player } from "video-react";
import VideoPlayer from "react-video-js-player";
import Car from "../../assets/video/ParallaxFilmsWEdding.mp4";

const Film = (props) => {
  const videoSrc = Car;
  const poster = "src/assets/img/parallax_couple.png";
  return (
    <section className="filmContainer">
      {/* <span>Video title 1</span> */}
      {/* <img src={props.film} /> */}
      <video controls>
        <source
          src="src\assets\video\ParallaxFilmsWEdding.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Film;
