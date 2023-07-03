import React from "react";
import Error from "./Error.gif";
export default function NotFound() {
  return (
    <>
      <div className="notFound">
        <img className="errorGIF" src={Error} alt="" />
        <h3>Sorry! Our API is at Limit please try again later</h3>
      </div>
    </>
  );
}
