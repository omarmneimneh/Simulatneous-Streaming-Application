import React from "react";
import ReactPlayer from "react-player/youtube";
import './player.css';
const Player = (props) => {
    return (
        <div> 
            <ReactPlayer url={props.url} width="50%" height="100%" controls={true} playing={false} />
        </div>
       
    )
}

export default Player;