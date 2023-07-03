import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import BodyItem from "./BodyItem";
import NotFound from "./NotFound";
import Search from "./Search";
import Spinner from "./Spinner";
export default function Body(
  { apiKey,title, keyword, country, type, genre, services }
) {
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState([]);
  const [articles2, setArticles2] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  // const [apiKey, setApiKey] = useState(process.env.REACT_APP_IMVT_API_KEY_1)
  // const apiKey = process.env.REACT_APP_IMVT_API_KEY_2;
  let apiURL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&services=${services}&genre=${genre}&keyword=${keyword}`;
  const updateBody = async () => {
    setProgress(10);
    setLoading1(true);
    const data = await fetch(apiURL);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.result);
    setLoading1(false);
    setProgress(100);
  };

  let searchURL = `https://streaming-availability.p.rapidapi.com/v2/search/title?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&title=${title}`;
  const updateSearch = async () => {
    setProgress(10);
    setLoading2(true);
    const data2 = await fetch(searchURL);
    setProgress(30);
    let parsedData2 = await data2.json();
    setProgress(70);
    setArticles2(parsedData2.result);
    setLoading2(false);
    setProgress(100);
  };
  useEffect(() => {
    updateBody();
  }, [apiKey, keyword, country, genre, services, type]);

  useEffect(() => {
    updateSearch();
  }, [apiKey, keyword, country, genre, services, type]);

  return (
    <div className="body">
      <LoadingBar color="white" progress={progress} height={1} />
      {loading2 && loading1 && <Spinner />}
      {articles2 &&
        articles2.map((element, id, result) => {
          return <Search key={id} id={id} articles2={articles2} />;
        }, 80)}
      {articles &&
        articles.map((element, id, result) => {
          return <BodyItem key={id} id={id} articles={articles} />;
        },80)}
      {!articles && !articles2 && <NotFound />}
    </div>
  );
}
