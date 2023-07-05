import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaPlayer() {
  const { imbdid } = useParams();
  const [screenMode, setScreenMode] = useState("full"); // full or half
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
              : `https://www.2embed.cc/embed/${imbdid}/color-white`
          }
          width={screenMode === "full" ? "100%" : "50%"}
          height={screenMode === "full" ? "100%" : "auto"}
          allowFullScreen
        ></iframe>
        <form className="externalLink">
          {/* <label htmlFor="extlink">Enter Your Link to Play:&nbsp;</label> */}
          <input
            type="text"
            id="extlink"
            placeholder="Enter Your Link to Play: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            value={extlinkinput}
            onChange={handleOnChange}
            width="500px"
          />
          <button
            // class="g-recaptcha"
            // data-sitekey="6Lc0avsmAAAAABo8Bnjf0BdM0F8IXrl9fDkCPtDq"
            // data-callback="onSubmit"
            // data-action="submit"
            type="submit"
            onClick={handleOnClick}
          >
            Play
          </button>
        </form>
      </div>
      {/* <div className={`media ${screenMode}`}>
        <iframe
          src={`https://vidsrc.me/embed/${imbdid}`}
          width={screenMode === "full" ? "100%" : "50%"}
          height={screenMode === "full" ? "100%" : "auto"}
          allowFullScreen
        ></iframe>
      </div> */}
    </>
  );
}
