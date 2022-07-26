import "./App.css";
import React from "react";
import Player from "./Components/Player/Player";
import { useState } from "react";
import Queue from "./Components/Queue/Queue";
import NavBar from "./Components/NavBar/NavBar";
const App = () => {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const [queue, setQueue] = useState([]);

  return (
    <div className="App">
      <div className="navbar">{/* <NavBar /> */}</div>
      <div className="wrapper">
        <Player url={url} setUrl={setUrl} queue={queue} setQueue={setQueue} />
      </div>
      <div className="queue">
        <Queue queue={queue} setQueue={setQueue} setUrl={setUrl} />
      </div>
    </div>
  );
};

export default App;
