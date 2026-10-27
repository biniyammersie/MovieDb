
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { Movieinstance } from "../../Utility/Movieinstance.js";
import requests from "../../Utility/request.js";
import { useEffect, useState } from "react";

function DisplayRow() {
  // Store the movie lists in React state
  const [movies, setmovies] = useState({
    trending: [],
    netflixOriginal: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  // Fetch movies when the component first mounts
  useEffect(() => {
    fetchmovies();
  }, []);

  // Fetch all eight movie categories
  const fetchmovies = async () => {
    try {
      const [
        trendingRes,
        netflixOriginalRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        Movieinstance.get(requests.fetchTrending),
        Movieinstance.get(requests.fetchNetflixOriginals),
        Movieinstance.get(requests.fetchTopRatedMovies),
        Movieinstance.get(requests.fetchActionMovies),
        Movieinstance.get(requests.fetchComedyMovies),
        Movieinstance.get(requests.fetchHorrorMovies),
        Movieinstance.get(requests.fetchRomanceMovies),
        Movieinstance.get(requests.fetchDocumentaries),
      ]);

      // Save the results in state
      setmovies({
        trending: trendingRes.data.results,
        netflixOriginal: netflixOriginalRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className={styles.mainwrapper}>
      <SlideShow title="Netflix Trending" Movies={movies.trending} />
      <SlideShow title="Netflix Originals" Movies={movies.netflixOriginal} />
      <SlideShow title="Top Rated" Movies={movies.topRated} />
      <SlideShow title="Action" Movies={movies.action} />
      <SlideShow title="Comedy" Movies={movies.comedy} />
      <SlideShow title="Horror" Movies={movies.horror} />
      <SlideShow title="Romance" Movies={movies.romance} />
      <SlideShow title="Documentaries" Movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;

