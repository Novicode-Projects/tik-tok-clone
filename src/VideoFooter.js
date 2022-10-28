import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/26/26554.png"
        alt=""
        className="videoFooter__record"
      />
    </div>
  );
}

export default VideoFooter;
