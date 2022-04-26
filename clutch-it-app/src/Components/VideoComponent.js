import React from 'react'
import YouTube from 'react-youtube'
import "./Youtube.css"


// https://www.youtube.com/watch?v=_nBlN9yp9R8
// https://youtu.be/_nBlN9yp9R8
function VideoComponent(props) {

    const videoOnReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    const opts = {
        height: '250',
        width: '400',
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };

    const {videoId} = props;

    return (
    <div className="youtube-sm">
        <div className="youtube-sm-inner">
            <YouTube videoId={videoId} opts={opts} onReady={videoOnReady} />
        </div>
    </div>
    );    
}

export default VideoComponent