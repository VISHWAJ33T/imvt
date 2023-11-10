import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaPlayer() {
  const { imbdid, type, ytid } = useParams();
  const [screenMode, setScreenMode] = useState("half");
  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);
  const [extlink, setExtlink] = useState(
    `https://multiembed.mov/directstream.php/?video_id=${imbdid}&${
      type === "movie" ? " " : `season=${season}&episode=${episode}`
    }`
  );
  // `https://www.2embed.cc/embed/${imbdid}`
  // `https://vidsrc.me/embed/${
  //   type === "series" ? "tv" : "movie"
  // }?imdb=${imbdid}&color=2986cc`
  // `https://multiembed.mov/?video_id=${imbdid}&${
  //   type === "series" ? "season=1&episode=1" : null
  // }`
  // );
  const iframeRef = useRef();
  // https://embed.smashystream.com/playere.php?imdb=tt0439572
  const handleOnClickyttrailer = (e) => {
    e.preventDefault();
    setExtlink(`https://www.youtube.com/embed/${ytid}`);
    iframeRef.current.src = extlink;
  };

  const handleOnClick2embed = (e) => {
    e.preventDefault();
    // setExtlink(`https://www.2embed.cc/embed/${imbdid}`);
    setExtlink(
      `https://vidsrc.me/embed/${
        type === "series" ? "tv" : "movie"
      }?imdb=${imbdid}&color=2986cc`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClicksmashystream = (e) => {
    e.preventDefault();
    setExtlink(`https://embed.smashystream.com/playere.php?imdb=${imbdid}`);
    iframeRef.current.src = extlink;
  };

  const handleOnClicksmashystreamhindi = (e) => {
    e.preventDefault();
    setExtlink(
      `https://embed.smashystream.com/playere.php?imdb=${imbdid}&player=D`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClicksmashystreamS = (e) => {
    e.preventDefault();
    setExtlink(
      `https://embed.smashystream.com/playere.php?imdb=${imbdid}&player=S`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClicksmashystreamF = (e) => {
    e.preventDefault();
    setExtlink(
      `https://embed.smashystream.com/playere.php?imdb=${imbdid}&player=F`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClicksmashystreamI = (e) => {
    e.preventDefault();
    setExtlink(
      `https://embed.smashystream.com/playere.php?imdb=${imbdid}&player=I`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClicksuperstream = (e) => {
    e.preventDefault();
    setExtlink(
      `https://multiembed.mov/directstream.php/?video_id=${imbdid}&${
        type === "movie" ? " " : `season=${season}&episode=${episode}`
      }`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClickprevseason = (e) => {
    e.preventDefault();
    setSeason(season - 1);
    setExtlink(
      `https://multiembed.mov/directstream.php/?video_id=${imbdid}&${
        type === "movie" ? " " : `season=${season}&episode=${episode}`
      }`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClicknextseason = (e) => {
    e.preventDefault();
    setSeason(season + 1);
    setExtlink(
      `https://multiembed.mov/directstream.php/?video_id=${imbdid}&${
        type === "movie" ? " " : `season=${season}&episode=${episode}`
      }`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClickprevepisode = () => {
    setEpisode(episode - 1);
    setExtlink(
      `https://multiembed.mov/directstream.php/?video_id=${imbdid}&${
        type === "movie" ? " " : `season=${season}&episode=${episode}`
      }`
    );
    iframeRef.current.src = extlink;
  };

  const handleOnClicknextepisode = () => {
    setEpisode(episode + 1);
    setExtlink(
      `https://multiembed.mov/directstream.php/?video_id=${imbdid}&${
        type === "movie" ? " " : `season=${season}&episode=${episode}`
      }`
    );
    iframeRef.current.src = extlink;
  };

  const toggleScreenMode = (e) => {
    e.preventDefault();
    setScreenMode((prevMode) => (prevMode === "full" ? "half" : "full"));
  };
  useEffect(() => {
    setExtlink(
      `https://multiembed.mov/directstream.php/?video_id=${imbdid}&${
        type === "movie" ? " " : `season=${season}&episode=${episode}`
      }`
    );
    iframeRef.current.src = extlink;
  }, [imbdid, type, ytid]);

  return (
    <>
      <div className={`media ${screenMode}-container`}>
        {/* allow-same-origin allow-popups allow-forms allow-scripts */}
        <iframe
          className={`${screenMode}`}
          ref={iframeRef}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src={extlink}
          width="100%"
          height="100%"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          allowFullScreen
          title="Media Player"
        ></iframe>
        <form className="externalbuttons">
          <button onClick={toggleScreenMode}>
            {screenMode === "full" ? "Minimize" : "Full Screen"}
          </button>
          {ytid && (
            <button type="button" onClick={handleOnClickyttrailer}>
              Trailer
            </button>
          )}

          <button type="button" onClick={handleOnClicksuperstream}>
            Main
          </button>
          {type === "Series" || type === "series" ? (
            <>
              <button type="button" onClick={handleOnClickprevepisode}>
                Prev Episode
              </button>
              <button type="button">EPISODE: 0{episode}</button>
              <button type="button" onClick={handleOnClicknextepisode}>
                Next Episode
              </button>
              <button type="button" onClick={handleOnClickprevseason}>
                Prev Season
              </button>
              <button type="button">SEASON: 0{season}</button>
              <button type="button" onClick={handleOnClicknextseason}>
                Next Season
              </button>
            </>
          ) : null}
          <button type="button" onClick={handleOnClicksmashystreamhindi}>
            Hindi
          </button>
          <button type="button" onClick={handleOnClick2embed}>
            English 1
          </button>
          <button type="button" onClick={handleOnClicksmashystreamS}>
            English 2
          </button>
          <button type="button" onClick={handleOnClicksmashystreamF}>
            English 3
          </button>
          <button type="button" onClick={handleOnClicksmashystreamI}>
            English 4
          </button>
        </form>
      </div>
    </>
  );
}
