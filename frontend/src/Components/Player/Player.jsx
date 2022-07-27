import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import './player.css';
const Player = (props) => {
    const[isPlaying, setIsPlaying] = useState(false);
    
    return (
        <>
            <ReactPlayer url={props.url} width="100%" height="100%" controls={true} playing={false} onEnded={props.handleEnded} className="player"/>
        </>
    )
}




export default Player;