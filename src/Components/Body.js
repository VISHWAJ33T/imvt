import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import BodyItem from "./BodyItem";
import NotFound from "./NotFound";
import Search from "./Search";
import Spinner from "./Spinner";
export default function Body(
  props,
  { title, keyword, country, type, genre, services }
) {
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState([]);
  const [articles2, setArticles2] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_IMVT_API_KEY_2;
  let apiURL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&services=${services}&genre=${genre}&keyword=${keyword}`;
  const updateBody = async () => {
    setProgress(10);
    // setLoading(true);
    const data = await fetch(apiURL);
    setProgress(20);
    let parsedData = await data.json();
    setProgress(30);
    // setLoading(false);
    setArticles(parsedData.result);
    setProgress(50);
  };

  let searchURL = `https://streaming-availability.p.rapidapi.com/v2/search/title?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&title=${title}`;
  const updateSearch = async () => {
    setProgress(60);
    setLoading(true);
    const data2 = await fetch(searchURL);
    setProgress(70);
    let parsedData2 = await data2.json();
    setProgress(80);
    setLoading(false);
    setArticles2(parsedData2.result);
    setProgress(100);
  };
  useEffect(() => {
    updateBody();
  }, [keyword, country, genre, services, type]);

  useEffect(() => {
    updateSearch();
  }, [keyword, country, genre, services, type]);

  return (
    <div className="body">
      <LoadingBar color="white" progress={progress} height={1} />
      {loading && <Spinner />}
      {articles2 &&
        articles2.map((element, id, result) => {
          return <Search key={id} id={id} articles2={articles2} />;
        }, 80)}
      {articles &&
        articles.map((element, id, result) => {
          return <BodyItem key={id} id={id} articles={articles} />;
        }, 80)}
      {!articles && !articles2 && <NotFound />}
    </div>
  );
}
