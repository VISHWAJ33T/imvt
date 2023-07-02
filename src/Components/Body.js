import React, { useEffect, useState } from "react";
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
  const apiKey = process.env.REACT_APP_IMVT_API_KEY;
  let apiURL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&services=${services}&genre=${genre}&keyword=${keyword}`;
  const updateBody = async () => {
    const data = await fetch(apiURL);
    let parsedData = await data.json();
    await setArticles(parsedData.result);
  };

  let searchURL = `https://streaming-availability.p.rapidapi.com/v2/search/title?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&title=${title}`;
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
