import React from "react";
import { Link } from "react-router-dom";
export default function Search({ id, articles2 }) {
  return (
    <>
      <div className="bodyItems">
        <div className="bodyItem">
          <div className="bodyItemImage">
            <Link to={`/play/${articles2[id].imdbId}`} target="_blank">
              <img src={`${articles2[id].posterURLs[92]}`} alt="" />
            </Link>
          </div>
          <div className="bodyItemDetails">
            <a
              href={`https://www.imdb.com/title/${articles2[id].imdbId}/`}
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="title">{articles2[id].title}</h2>
            </a>
            <div className="genres">
              <span className="type">
                {articles2[id].type[0].toUpperCase() +
                  articles2[id].type.slice(1)}
              </span>
              <span className="year">
                {articles2[id].year
                  ? articles2[id].year
                  : articles2[id].firstAirYear}
              </span>
              {articles2[id].genres.map((element, gid, result) => {
                return (
                  <span className="genre">
                    {articles2[id].genres[gid].name}
                  </span>
                );
              }, 80)}
            </div>

            <div class="ratings">
              <span className="rating">
                <i class="fas fa-star" style={{ color: "#ffffff" }}></i>&nbsp;
                {articles2[id].imdbRating}/100
              </span>
              <span className="nofRating">
                <i class="fa fa-users" aria-hidden="true"></i>
                &nbsp;
                {articles2[id].imdbVoteCount}
              </span>
              <span className="minAge">
                <i class="fa fa-user" aria-hidden="true"></i>
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
