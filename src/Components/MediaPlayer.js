import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaPlayer() {
  const { imbdid } = useParams();
  const [screenMode, setScreenMode] = useState("full"); // full or half

  const toggleScreenMode = () => {
    setScreenMode((prevMode) => (prevMode === "full" ? "half" : "full"));
  };

  return (
    <div className={`media ${screenMode}`}>
      <iframe
        src={`https://www.2embed.cc/embed/${imbdid}`}
        width={screenMode === "full" ? "100%" : "50%"}
        height={screenMode === "full" ? "100%" : "auto"}
        allowFullScreen
      ></iframe>
      {/* <button onClick={toggleScreenMode}>
        {screenMode === 'full' ? 'Half Screen' : 'Full Screen'}
      </button> */}
    </div>
  );
}
