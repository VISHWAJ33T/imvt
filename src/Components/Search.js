import React from "react";
import { Link } from "react-router-dom";

export default function Search({ id, articles2 }) {
  const handlePosterClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const title = articles2[id].title;
  const imdbId = articles2[id].imdbId;
  const posterURL = articles2[id].posterURLs[92];
  const year = articles2[id].year || articles2[id].firstAirYear;
  const type = articles2[id].type[0].toUpperCase() + articles2[id].type.slice(1);
  const genres = articles2[id].genres.map((element, gid) => (
    <span className="genre" key={gid}>
      {articles2[id].genres[gid].name}
    </span>
  ));

  return (
    <>
      <div className="bodyItems">
        <div className="bodyItem">
          <div className="bodyItemImage">
            <Link to={`/play/${imdbId}`} onClick={handlePosterClick}>
              <img src={posterURL} alt={`${title} Poster`} />
            </Link>
          </div>
          <div className="bodyItemDetails">
            <a
              href={`https://www.imdb.com/title/${imdbId}/`}
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="title">{title}</h2>
            </a>
            <div className="genres">
              <span className="type">{type}</span>
              <span className="year">{year}</span>
              {genres}
            </div>
            <div className="ratings">
              <span className="rating">
                <i className="fas fa-star" style={{ color: "#ffffff" }}></i>&nbsp;
                {articles2[id].imdbRating}/100
              </span>
              <span className="nofRating">
                <i className="fa fa-users" aria-hidden="true"></i>
                &nbsp;
                {articles2[id].imdbVoteCount}
              </span>
              <span className="minAge">
                <i className="fa fa-user" aria-hidden="true"></i>
                &ge;
                {articles2[id].advisedMinimumAudienceAge}Yr
              </span>
            </div>
          </div>
        </div>

        <div className="bodyItemDetails1">
          {articles2[id].directors ? (
            <p className="directors">
              <b>Directors: </b>
              {articles2[id].directors.join(", ")}
            </p>
          ) : null}
          <p className="cast">
            <b>Cast: </b>
            {articles2[id].cast.join(", ")}
          </p>
          <p className="overview">
            <b>Overview: </b>
            {articles2[id].overview}
          </p>
        </div>
      </div>
    </>
  );
}
