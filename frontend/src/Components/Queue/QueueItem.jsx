import React from "react";

const QueueItem = (props) => {
    const handleDelete = () => {
        props.setQueue(props.queue.filter(item => item.id !== props.item.id));
        console.table(props.queue);
    }

    const videoID = props.item.url.split("v=")[1].split("&")[0];
    const videoPhoto = `https://img.youtube.com/vi/${videoID}/sddefault.jpg`

    return (
        <div className="queue-item">
            <img src={videoPhoto} alt=""/>
            <a href={props.item.url}>{props.item.url}</a>
            <button onClick={handleDelete}>remove</button>
        </div>
    );
}

export default QueueItem;