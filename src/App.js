import React from "react";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpComing} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="On The Air" fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default App;
