import React from "react";

const QueueItem = (props) => {
    const handleDelete = () => {
        props.setQueue(props.queue.filter(item => item.id !== props.item.id));
        console.table(props.queue);
    }

    //TODO: type check for valid youtube url
    // const videoID = props.item.url.split("v=")[1].split("&")[0];
    // const thumbnail = `https://img.youtube.com/vi/${videoID}/sddefault.jpg`;

    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = props.item.url.match(regExp);
    const thumbnail = `https://img.youtube.com/vi/${match[2]}/sddefault.jpg`;
    
    return (
        <div className="queue-item">
            <img src={thumbnail} alt=""/>
            <a href={props.item.url}>{props.item.url}</a>
            <button onClick={handleDelete}>remove</button>
        </div>
    );
}

export default QueueItem;


//https://www.youtube.com/watch?v=CKker83XzG4