import React from "react";
export default function BodyItem({ id, articles }) {
  return (
    <>
      <div className="bodyItems">
        <div className="bodyItem">
          <div className="bodyItemImage"><a href={`https://www.imdb.com/title/${articles[id].imdbId}/`} rel="noreferrer" target="_blank">
            <img src={`${articles[id].posterURLs[92]}`} alt="" /></a>
          </div>
          <div className="bodyItemDetails">
            <h2 className="title">{articles[id].title}</h2>
            <div className="genres">
              <span className="type">
                {articles[id].type[0].toUpperCase() +
                  articles[id].type.slice(1)}
              </span>
              <span className="year">
                {articles[id].year
                  ? articles[id].year
                  : articles[id].firstAirYear}
              </span>
              {articles[id].genres.map((element, gid, result) => {
                // console.log(element)
                return (
                  <span className="genre">{articles[id].genres[gid].name}</span>
                );
              }, 80)}
            </div>

            <div class="ratings">
              <span className="rating">
                <i class="fas fa-star" style={{ color: "#ffffff" }}></i>&nbsp;
                {articles[id].imdbRating}/100
              </span>
              <span className="nofRating">
                <i class="fa fa-users" aria-hidden="true"></i>
                &nbsp;
                {articles[id].imdbVoteCount}
              </span>
              <span className="minAge">
                <i class="fa fa-user" aria-hidden="true"></i>
                &ge;
                {articles[id].advisedMinimumAudienceAge}Yr
              </span>
            </div>
          </div>
        </div>

        <div className="bodyItemDetails1">
          {articles[id].directors ? (
            <p className="directors">
              <b>Directors: </b>
              {articles[id].directors.join(", ")}
            </p>
          ) : null}
          <p className="cast">
            <b>Cast: </b>
            {articles[id].cast.join(", ")}
          </p>
          <p className="overview">
            <b>Overview: </b>
            {articles[id].overview}
          </p>
        </div>
      </div>
    </>
  );
}
