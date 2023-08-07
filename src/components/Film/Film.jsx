import "./Film.css";
import React from "react";
import { Player } from "video-react";


const Film = (props) => {
  return (
    <section className="filmContainer">
      {/* <span>Video title 1</span> */}
      {/* <img src={props.film} /> */}
      <link rel="stylesheet" href="/css/video-react.css" />
      <Player
        playsInline
        poster={props.film}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </section>
  );
};

export default Film;
