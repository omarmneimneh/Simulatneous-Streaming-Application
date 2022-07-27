import React from "react";
import ReactPlayer from "react-player/youtube";
import './player.css';
const Player = (props) => {

    
    
    return (
        <>
            <ReactPlayer url={props.url} width="100%" height="100%" controls={true} playing={false} onEnded={props.ended} className="player"/>
        </>
    )
}




export default Player;