import React, { useState, useEffect } from "react";
import Nothing from "./noResults.gif";

export default function NoResults() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="notFound">
      {showMessage ? (
        <>
          <img className="errorGIF" src={Nothing} alt="" />
          <h3>Searching for results. This may take a moment...</h3>
        </>
      ) : (
        <>
          <img className="errorGIF" src={Nothing} alt="" />
          <h3>Oops! No results found. Please try again later.</h3>
        </>
      )}
    </div>
  );
}
