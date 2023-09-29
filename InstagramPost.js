import React from 'react';
import YouTube from 'react-youtube';

const YoutubeEmbed = () => {
  // Replace 'ME35oW_-7jQ' with the actual video ID from your YouTube URL
  const videoId = 'ME35oW_-7jQ';

  const opts = {
    height: '790',
    width: '1510',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed for your layout
  };

  return (
    <div>
        <center><h1>Fin Videos</h1></center>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeEmbed;
