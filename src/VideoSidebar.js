import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function VideoSidebar({ likes, shares, messages }) {
  const [like, setLike] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {like ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLike(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={(e) => setLike(true)} />
        )}
        <p>{like ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
