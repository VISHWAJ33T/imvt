import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import BodyItem from "./BodyItem";
import NotFound from "./NotFound";
import Search from "./Search";
import Spinner from "./Spinner";
import NotSearch from "./NotSearch";
export default function Body({
  apiKey,
  title,
  keyword,
  country,
  type,
  genre,
  services,
}) {
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState([]);
  const [articles1, setArticles1] = useState([]);
  const [nextCursor, setNextCursor] = useState(`&cursor=`);
  const [articles2, setArticles2] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  const handleNextClick = (e) => {
    e.preventDefault();
    articles.hasMore && setNextCursor(`&cursor=` + articles.nextCursor);
  };
  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  let apiURL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&services=${services}&genre=${genre}&keyword=${keyword}${nextCursor}`;
  const updateBody = async () => {
    setProgress(10);
    setLoading1(true);
    const data = await fetch(apiURL);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData);
    setArticles1(parsedData.result);
    setLoading1(false);
    setProgress(100);
  };

  let searchURL = `https://streaming-availability.p.rapidapi.com/v2/search/title?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&title=${title}`;
  const updateSearch = async () => {
    const data2 = await fetch(searchURL);
    setLoading2(true);
    setProgress(10);
    let parsedData2 = await data2.json();
    setProgress(40);
    setArticles2(parsedData2.result);
    setProgress(80);
    setLoading2(false);
    setProgress(100);
  };

  function backdropImage1() {
    if (articles1 && articles1[0] && width >= 1280) {
      return articles1[0].backdropURLs[1280];
    } else if (articles1 && articles1[0] && width <= 300) {
      return articles1[0].backdropURLs[300];
    } else {
      return articles1[0].backdropURLs[780];
    }
  }

  function backdropImage2() {
    if (articles2 && articles2[0] && width >= 1280) {
      return articles2[0].backdropURLs[1280];
    } else if (articles2 && articles2[0] && width <= 300) {
      return articles2[0].backdropURLs[300];
    } else {
      return articles2[0].backdropURLs[780];
    }
  }

  useEffect(() => {
    updateBody();
  }, [apiKey, keyword, country, genre, services, type, width, nextCursor]);

  useEffect(() => {
    updateSearch();
  }, [apiKey, keyword, country, genre, services, type]);

  return (
    <div
      className="body"
      ref={ref}
      style={
        articles2
          ? articles2[0] && { "--image-url": `url(${backdropImage2()})` }
          : articles1[0] && { "--image-url": `url(${backdropImage1()})` }
      }
    >
      {!articles2 && <NotSearch id="top" />}
      <LoadingBar color="white" progress={progress} height={1} />
      {loading2 && loading1 && <Spinner />}
      {articles2 &&
        articles2.map((element, id, result) => {
          return <Search key={id} id={id} articles2={articles2} />;
        }, 80)}

      {articles1 &&
        articles1.map((element, id, result) => {
          return <BodyItem key={id} id={id} articles1={articles1} />;
        }, 80)}
      <button href="#top" className="next" onClick={handleNextClick}>
        Next
      </button>
      {!articles1 && !articles2 && <NotFound />}
    </div>
  );
}
