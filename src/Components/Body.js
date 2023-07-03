import React, { useEffect, useState } from "react";
import BodyItem from "./BodyItem";
import Search from "./Search";
import Spinner from "./Spinner";
export default function Body({
  title,
  keyword,
  country,
  type,
  genre,
  services,
}) {
  const [articles, setArticles] = useState([]);
  const [articles2, setArticles2] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_IMVT_API_KEY_1;
  // const apiKey = "282ae4e060msh103d61ae2af431ep1d4986jsna71f94948482";
  let apiURL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&services=${services}&genre=${genre}&keyword=${keyword}`;
  const updateBody = async () => {
    // setLoading(true);
    const data = await fetch(apiURL);
    let parsedData = await data.json();
    await setArticles(parsedData.result);
    // setLoading(false);
  };

  let searchURL = `https://streaming-availability.p.rapidapi.com/v2/search/title?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&title=${title}`;
  const updateSearch = async () => {
    setLoading(true);
    const data2 = await fetch(searchURL);
    let parsedData2 = await data2.json();
    await setArticles2(parsedData2.result);
    setLoading(false);
  };
  useEffect(() => {
    updateBody();
  }, [keyword,country,genre,services,type]);

  useEffect(() => {
    updateSearch();
  }, [title,country,genre,services,type]);

  return (
    <div className="body">
      {loading && <Spinner />}
      {articles2.map((element, id, result) => {
            return <Search key={id} id={id} articles2={articles2} />;
          }, 80)}
      {articles.map((element, id, result) => {
        return <BodyItem key={id} id={id} articles={articles} />;
      }, 80)}
    </div>
  );
}
