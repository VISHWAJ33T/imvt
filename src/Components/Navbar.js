import React, { useState } from "react";
import Logo from "./ImVt Logo.png";
export default function Navbar({
  setTitle,
  setKeyword,
  country,
  setCountry,
  type,
  setType,
  genre,
  setGenre,
  services,
  setServices,
}) {
  const [value, setValue] = useState("");
  const [gvalue, setGvalue] = useState("Adventure");
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnClick = () => {
    setTitle(value);
    setKeyword(value);
  };

  return (
    <header>
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" class="menu-icon">
            <i class="fas fa-bars"></i>
          </label>
          <div className="content">
            <div className="logo">
              <a href="/">
                <img src={Logo} className="logoImg" alt="" />
              </a>
            </div>
            <ul class="links">
              <li>
                <a class="desktop-link">
                  Type: <em>{type}</em>
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">
                  Type: <em>{type}</em>
                </label>
                <ul>
                  <li>
                    <a
                      onClick={() => {
                        setType("all");
                      }}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setType("movie");
                      }}
                    >
                      Movie
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setType("series");
                      }}
                    >
                      Series
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="desktop-link">
                  Genre: <em>{gvalue}</em>
                </a>
                <input type="checkbox" id="show-items" />
                <label for="show-items">
                  Genre: <em>{gvalue}</em>
                </label>
                <ul>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("28");
                        setGvalue("Action");
                      }}
                    >
                      {" "}
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("12");
                        setGvalue("Adventure");
                      }}
                    >
                      Adventure
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("16");
                        setGvalue("Animation");
                      }}
                    >
                      Animation
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("35");
                        setGvalue("Comedy");
                      }}
                    >
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("80");
                        setGvalue("Crime");
                      }}
                    >
                      Crime
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("18");
                        setGvalue("Drama");
                      }}
                    >
                      Drama
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("14");
                        setGvalue("Fantasy");
                      }}
                    >
                      Fantasy
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("27");
                        setGvalue("Horror");
                      }}
                    >
                      Horror
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("9648");
                        setGvalue("Mystery");
                      }}
                    >
                      Mystery
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("27");
                        setGvalue("Romance");
                      }}
                    >
                      Romance
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("10749");
                        setGvalue("Sci-Fi");
                      }}
                    >
                      Sci-Fi
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setGenre("53");
                        setGvalue("Thriller");
                      }}
                    >
                      Thriller
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="desktop-link">Services: {services}</a>
                <input type="checkbox" id="show-services" />
                <label for="show-services">Services: {services}</label>
                <ul>
                  <li>
                    <a
                      onClick={() => {
                        setServices("prime");
                      }}
                    >
                      Amazon Prime
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setServices("apple");
                      }}
                    >
                      Apple
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setServices("disney");
                      }}
                    >
                      Disney
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setServices("netflix");
                      }}
                    >
                      Netflix
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a class="desktop-link">
                  Country : <em>{country}</em>
                </a>
                <input type="checkbox" id="show-things" />
                <label for="show-things">
                  Country : <em>{country}</em>
                </label>
                <ul>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("au");
                      }}
                    >
                      Australia
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("fr");
                      }}
                    >
                      France
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("de");
                      }}
                    >
                      Germany
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("in");
                      }}
                    >
                      India
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("it");
                      }}
                    >
                      Italy
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("jp");
                      }}
                    >
                      Japan
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("sg");
                      }}
                    >
                      Singapore
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("za");
                      }}
                    >
                      South Africa
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setCountry("us");
                      }}
                    >
                      USA
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <i className="fas fa-search"></i>
          </label>
          <form action="#" className="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              value={value}
              onChange={handleOnChange}
              required
            />
            <button type="submit" onClick={handleOnClick} className="go-icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
