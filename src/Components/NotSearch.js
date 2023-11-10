import React, { useEffect, useState } from "react";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div style={{textAlign:"center"}} className="notFound" aria-label="API Limit Notification">
          {/* <h3 aria-level="2">API is at its limit</h3> */}
          <span>
            {/* Search results may not be accurate. Please Change API Key or try again later. */}
            If the search results are not accurate, try changing the API Key or try again later.
          </span>
        </div>
      )}
    </>
  );
}
