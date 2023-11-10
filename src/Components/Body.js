import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import BodyItem from "./BodyItem";
import MediaPlayer from "./MediaPlayer";
import NoResults from "./NoResults";
import NotFound from "./NotFound";
import NotSearch from "./NotSearch";
import Search from "./Search";
import Spinner from "./Spinner";

export default function Body({
  apiKey,
  title,
  keyword,
  country,
  type,
  genre,
  services,
  pageArr,
}) {
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState([]);
  const [articles1, setArticles1] = useState(false);
  const [nextCursor, setNextCursor] = useState(`&cursor=`);
  const [articles2, setArticles2] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  const handleNextClick = (e) => {
    e.preventDefault();
    articles.hasMore && setNextCursor(`&cursor=` + articles.nextCursor);
    pageArr.push(articles.nextCursor);
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    pageArr[pageArr.length - 1] &&
      setNextCursor(`&cursor=` + pageArr[pageArr.length - 2]);
    pageArr.pop();
  };

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const backdropImage1 = () => {
    if (articles1 && articles1[0] && width >= 1280) {
      return articles1[0].backdropURLs[1280];
    } else if (articles1 && articles1[0] && width <= 300) {
      return articles1[0].backdropURLs[300];
    } else {
      return articles1[0].backdropURLs[780];
    }
  };

  const backdropImage2 = () => {
    if (articles2 && articles2[0] && width >= 1280) {
      return articles2[0].backdropURLs[1280];
    } else if (articles2 && articles2[0] && width <= 300) {
      return articles2[0].backdropURLs[300];
    } else {
      return articles2[0].backdropURLs[780];
    }
  };

  const sortArticlesByYear = (articles) => {
    return articles.slice().sort((a, b) => {
      const yearA = a.year || a.firstAirYear;
      const yearB = b.year || b.firstAirYear;
      return yearB - yearA;
    });
  };

  const updateData = async () => {
    setProgress(10);
    setLoading1(true);
    setLoading2(true);

    try {
      const basicDataURL = `https://streaming-availability.p.rapidapi.com/v2/search/basic?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&services=${services}&genre=${genre}&keyword=${keyword}&${nextCursor}`;
      const searchDataURL = `https://streaming-availability.p.rapidapi.com/v2/search/title?rapidapi-key=${apiKey}&country=${country}&show_type=${type}&title=${title}`;

      const [basicData, searchData] = await Promise.all([
        fetch(basicDataURL).then((res) => res.json()),
        fetch(searchDataURL).then((res) => res.json()),
      ]);

      setProgress(30);
      setArticles(basicData);
      setProgress(60);
      setArticles1(sortArticlesByYear(basicData.result));
      setProgress(70);
      setProgress(100);
      setArticles2(sortArticlesByYear(searchData.result));
      setProgress(10);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading1(false);
      setLoading2(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    updateData();
  }, [apiKey, keyword, country, genre, services, type, width, nextCursor]);
  useEffect(() => {
    setArticles2(false);
  }, [apiKey]);
  return (
    <div
      className="body"
      ref={ref}
      style={
        articles2
          ? articles2[0] && {
              "--image-url": `url(${backdropImage2()})`,
            }
          : articles1[0] && {
              "--image-url": `url(${backdropImage1()})`,
            }
      }
    >
      <BrowserRouter>
        <>
          <Routes>
            <Route
              path={`/play/:imbdid/:type?/:ytid?`}
              element={
                <MediaPlayer articles1={articles1} articles2={articles2} />
              }
            />
          </Routes>
          {(!articles2) && <NotSearch />}
          <LoadingBar color="brown" progress={progress} height={3} />
          {((loading2 || loading1) && <Spinner />) ||
            ((articles1 || articles2) &&
              articles1.length === 0 &&
              (!articles2 || articles2.length === 0) && <NoResults />)}
          {articles2 &&
            articles2.map((element, id, result) => {
              return <Search key={id} id={id} articles2={articles2} />;
            }, 80)}
          {articles1 &&
            articles1.map((element, id, result) => {
              return <BodyItem key={id} id={id} articles1={articles1} />;
            }, 80)}
          <div className="pagination">
            {pageArr[pageArr.length - 1] && (
              <button className="prev" onClick={handlePrevClick}>
                Previous
              </button>
            )}
            {articles.hasMore && (
              <button className="next" onClick={handleNextClick}>
                Next
              </button>
            )}
          </div>
        </>
      </BrowserRouter>
    </div>
  );
}
