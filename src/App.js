import "./App.css";
import React, { useEffect, useState } from "react";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(db);
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            key={video.id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
