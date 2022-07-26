import React, {useState} from "react";
import './queue.css';
import QueueItem from './QueueItem';

const Queue = (props) => {
    const[urlInput, setUrlInput] = useState("");
    //handle adding items to queues
    const handleAdding = (e) => {
        e.preventDefault();
        console.log(urlInput);

        props.setQueue([...props.queue, {
            url: urlInput,
            id: Math.random() * 100
        }]);
        //clear hook and input box
        document.getElementById("inputBox").value = "";
        setUrlInput("");
    }


    //handles pasting links
    const inputChange = (e) => {
        setUrlInput(e.target.value);
    }
    return (
        <div className="queue">
        <h1>Queue</h1>
        <ul>
            {props.queue.map((item, index) => {
                return (
                    <li key={index}>
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
        <input id="inputBox" type="url" onChange={inputChange}placeholder="Paste video link here.." />
        <button onClick={handleAdding}>Add Video</button>
        </div>
    ); 
}

export default Queue;