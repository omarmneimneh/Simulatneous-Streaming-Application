import React from "react";
import ReactPlayer from "react-player/youtube";
import './player.css';
const Player = (props) => {

    const handleEnded = () => {
        if(props.queue.length > 0) {
            props.setUrl(props.queue.shift().url);
        }
    }
    
    return (
        <>
            <ReactPlayer url={props.url} width="50%" height="100%" controls={true} playing={false} onEnded={handleEnded} className="player"/>
        </>
    )
}




export default Player;