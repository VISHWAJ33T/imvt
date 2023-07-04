import React from "react";
import { Link } from "react-router-dom";
export default function BodyItem({ id, articles1 }) {
  return (
    <>
      <div className="bodyItems">
        <div className="bodyItem">
          <div className="bodyItemImage">
            <Link to={`/play/${articles1[id].imdbId}`} target="_blank">
              <img src={`${articles1[id].posterURLs[92]}`} alt="" />
            </Link>
          </div>
          <div className="bodyItemDetails">
            <a
              href={`https://www.imdb.com/title/${articles1[id].imdbId}/`}
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="title">{articles1[id].title}</h2>
            </a>
            <div className="genres">
              <span className="type">
                {articles1[id].type[0].toUpperCase() +
                  articles1[id].type.slice(1)}
              </span>
              <span className="year">
                {articles1[id].year
                  ? articles1[id].year
                  : articles1[id].firstAirYear}
              </span>
              {articles1[id].genres.map((element, gid, result) => {
                // console.log(element)
                return (
                  <span className="genre">
                    {articles1[id].genres[gid].name}
                  </span>
                );
              }, 80)}
            </div>

            <div className="ratings">
              <span className="rating">
                <i className="fas fa-star" style={{ color: "#ffffff" }}></i>
                &nbsp;
                {articles1[id].imdbRating}/100
              </span>
              <span className="nofRating">
                <i className="fa fa-users" aria-hidden="true"></i>
                &nbsp;
                {articles1[id].imdbVoteCount}
              </span>
              <span className="minAge">
                <i className="fa fa-user" aria-hidden="true"></i>
                &ge;
                {articles1[id].advisedMinimumAudienceAge}Yr
              </span>
            </div>
          </div>
        </div>

        <div className="bodyItemDetails1">
          {articles1[id].directors ? (
            <p className="directors">
              <b>Directors: </b>
              {articles1[id].directors.join(", ")}
            </p>
          ) : null}
          <p className="cast">
            <b>Cast: </b>
            {articles1[id].cast.join(", ")}
          </p>
          <p className="overview">
            <b>Overview: </b>
            {articles1[id].overview}
          </p>
        </div>
      </div>
    </>
  );
}
