import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Navbar({title,setTitle,setKeyword}) {
  const handleOnChange = (event) => {
    console.log("On Change");
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  return (
    <header>
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <div className="content">
            <div className="logo">
              <a href="#">ImVt</a>
            </div>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <i className="fas fa-search"></i>
          </label>
          <form action="#" className="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              value={title}
              onChange={handleOnChange}
              required
            />
            {/* <Link to="/search"> */}
            <button type="submit" className="go-icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
            {/* </Link> */}
          </form>
        </nav>
      </div>
    </header>
  );
}