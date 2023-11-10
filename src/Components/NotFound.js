import React from "react";
import Error from "./Error.gif";
export default function NotFound({apikey}) {
  return (
    <>
      <div className="notFound">
        <img className="errorGIF" src={Error} alt="" />
        {<h3>Sorry! API key is at Limit please change the api key or try again later</h3>}
      </div>
    </>
  );
}
