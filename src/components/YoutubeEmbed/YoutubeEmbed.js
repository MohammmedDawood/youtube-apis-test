import React from "react";
import PropTypes from "prop-types";
import classes from "./youtubeEmbed.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className={classes.video_responsive}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      className={classes.video_responsive_iframe}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
