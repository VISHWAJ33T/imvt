import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyItem from "./BodyItem";
import Search from "./Search";

export default function Body({ title, setTitle, keyword }) {
  const [articles, setArticles] = useState([]);
  const [articles2, setArticles2] = useState([]);
  const [country, setCountry] = useState("in");
  const [type, setType] = useState("all");
  const [genre, setGenre] = useState("35");
  const [services, setServices] = useState(
    "netflix,prime.buy,hulu.addon.hbo,peacock.free"
  );

  let apiURL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?rapidapi-key=bd18f5c7c7msh7ba7ed22e2fda0dp17a94bjsn0df5d1a57b29&country=${country}&show_type=${type}&services=${services}&genre=${genre}&keyword=${keyword}`;
  const updateBody = async () => {
    const data = await fetch(apiURL);
    let parsedData = await data.json();
    await setArticles(parsedData.result);
  };

  let searchURL = `https://streaming-availability.p.rapidapi.com/v2/search/title?rapidapi-key=bd18f5c7c7msh7ba7ed22e2fda0dp17a94bjsn0df5d1a57b29&country=${country}&show_type=${type}&title=${title}`;
  const updateSearch = async () => {
    const data = await fetch(searchURL);
    let parsedData2 = await data.json();
    await setArticles2(parsedData2.result);
  };
  useEffect(() => {
    updateBody();
  }, [keyword]);

  useEffect(() => {
    updateSearch();
  }, [title]);

  return (
    <div className="body">
      {articles2.map((element, id, result) => {
        return <Search key={id} id={id} articles2={articles2} />;
      }, 80)}
      {articles.map((element, id, result) => {
        return <BodyItem key={id} id={id} articles={articles} />;
      }, 80)}
    </div>
  );
}
