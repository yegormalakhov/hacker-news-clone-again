import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [randomNews, setRandomNews] = useState({ hits: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState();
  const [isLoading, setLoaded] = useState(true);
  const [newsPrePage, setNewsPerPage] = useState(20);

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
    setSearchTerm("");
  };

  const handleAddNews = () => {
    let newNumberPerPage = newsPrePage + 20;
    // console.log(newNumberPerPage);
    return setNewsPerPage(newNumberPerPage);
  };

  useEffect(() => {
    const url = new URL("http://hn.algolia.com/api/v1/search_by_date");
    url.searchParams.set("tags", "story");
    query && url.searchParams.set("query", query);
    newsPrePage && url.searchParams.set("hitsPerPage", newsPrePage);

    const fetchData = async () => {
      try {
        const result = await axios(url.toString());
        setRandomNews(result.data);
        setLoaded(false);
        return;
      } catch (e) {
        alert("Sorry, somehting went wrong");
        console.log(e);
      }
    };
    fetchData();
  }, [query, newsPrePage]);

  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : null}

      <div className="body">
        <Navbar />
        <div className="News-list">
          {randomNews.nbHits !== 0 && (
            <>
              {randomNews.hits
                .filter((newsPost) => newsPost.url)
                .map((newsPost, index) => {
                  return (
                    <News
                      key={newsPost.objectID}
                      newsPost={newsPost}
                      index={index}
                    />
                  );
                })}
              <div className="Show-More">
                <button className="btn-load-more" onClick={handleAddNews}>
                  More
                </button>
              </div>
            </>
          )}
          {!isLoading && !randomNews.hits.length && (
            <p className="Error-Message">
              We found no <strong>stories</strong> matching{" "}
              <strong>{query}</strong>
            </p>
          )}
        </div>

        <Footer
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;
