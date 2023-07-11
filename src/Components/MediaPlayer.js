import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaPlayer() {
  const { imbdid } = useParams();
  const [screenMode, setScreenMode] = useState("full");
  const [extlink, setExtlink] = useState();
  const [extlinkinput, setExtlinkinput] = useState();

  const toggleScreenMode = () => {
    setScreenMode((prevMode) => (prevMode === "full" ? "half" : "full"));
  };

  const handleOnChange = (event) => {
    setExtlinkinput(event.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    setExtlink(extlinkinput);
  };
  return (
    <>
      <div className={`media ${screenMode}`}>
        <iframe
          src={
            extlink
              ? extlink
              : `https://www.2embed.cc/embed/${imbdid}`
          }
          width={screenMode === "full" ? "100%" : "50%"}
          height={screenMode === "full" ? "100%" : "auto"}
          allowFullScreen
          title="Media Player"
        ></iframe>
        <form className="externalLink">
          <input
            type="text"
            id="extlink"
            placeholder="Enter Your Link to Play: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            value={extlinkinput}
            onChange={handleOnChange}
            style={{ width: "500px" }}
          />
          <button
            type="submit"
            onClick={handleOnClick}
          >
            Play
          </button>
        </form>
      </div>
    </>
  );
}
