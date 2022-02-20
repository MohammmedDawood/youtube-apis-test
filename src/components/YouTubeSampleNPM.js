import React from "react";
import YouTube from "react-youtube";

function YouTubeSampleNPM(props) {
  const opts = {
    height: "390px",
    width: "640px",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   //   autoplay: 1,
    // },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId="r-yxNNO1EI8" opts={opts} onReady={onReady} />;
}
// https://youtu.be/r-yxNNO1EI8
export default YouTubeSampleNPM;
