import React from "react";
import YouTube from "react-youtube";

function YouTubeSampleNPM(props) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId="XtwuYxP_h4E" opts={opts} onReady={onReady} />;
}
// https://youtu.be/XtwuYxP_h4E
export default YouTubeSampleNPM;
