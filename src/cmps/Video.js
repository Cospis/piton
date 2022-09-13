import preloader from "../Videopreloader.png";
import ReactPlayer from "react-player/lazy";
import React, { useState } from "react";
import Popup from "./popup";
const Defaultvideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="video-container">
      <p>
        Watch This Video <br />
        To Learn Helpful Lessons
      </p>
      {isOpen && (
        <Popup
          content={
            <>
              <ReactPlayer
                className="vid"
                url="https://youtu.be/sQLlPC_alT8"
                width="100%"
                height="100%"
              />
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <img src={preloader} alt="popup" onClick={togglePopup} />
    </div>
  );
};

export default Defaultvideo;
