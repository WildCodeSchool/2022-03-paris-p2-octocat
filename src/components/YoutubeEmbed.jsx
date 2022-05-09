import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div id="trailer-responsive" className="h-screen w-screen" >
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      frameBorder="0" style={{width: '100%', height: '100%'}}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
