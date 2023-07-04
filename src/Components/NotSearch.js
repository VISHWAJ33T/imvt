import React, { useEffect, useState } from "react";

export default function () {
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
        <div className="notFound">
          <h3>Api is at limit</h3>
          <span>Search Results may not be accurate</span>
        </div>
      )}
    </>
  );
}
