import React, { useState } from "react";
import './queue.css';
import QueueItem from './QueueItem';

const Queue = (props) => {
    const [urlInput, setUrlInput] = useState("");
    //handle adding items to queues
    const handleAdding = (e) => {
        e.preventDefault();
        props.setQueue([...props.queue, {
            url: urlInput,
            id: Math.random() * 100
        }]);
        //clear hook and input box
        document.getElementById("inputBox").value = "";
        setUrlInput("");
    }

    const playNext = () =>{
        const link = props.queue[0].url;
        props.setUrl(link);
        props.setQueue([props.queue.shift()]);
    }

    //handles pasting links
    const inputChange = (e) => {
        setUrlInput(e.target.value);
    }
    
    return (
        <>
            <h1>Queue</h1>
            <ul>
                {props.queue.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <QueueItem
                                class='input'
                                item={item}
                                queue={props.queue}
                                setQueue={props.setQueue}
                            />
                        </li>
                    );
                }
                )}
            </ul>
            <input id="inputBox" type="url" onChange={inputChange} placeholder="Paste video link here.." />
            <button onClick={handleAdding}>Add Video</button>
            <button onClick={props.ended}>Next</button>
        </>
    );
}

export default Queue;