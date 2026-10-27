import styles from "./Banner.module.css";
import NetflixBanner from "../../assets/image/logo.png";
import {Play, Info} from "lucide-react";
import { useEffect, useState } from "react";
import{Movieinstance } from "../../Utility/Movieinstance.js"
const BANNER_BASE= "https://image.tmdb.org/t/p/original/"
import request from '../../Utility/request.js'
import requests from "../../Utility/request.js";
function Banner() {
const [bannerImage, setbannerImage] = useState({});

useEffect(() => {
  async function fetchbannerimage() {
    const request = await Movieinstance.get(requests.fetchNetflixOriginals);

    setbannerImage(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ],
    );
  }

  fetchbannerimage();
}, []);


function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage?.backdrop_path}")`,
      }}
    >
      <div className={styles.contents}>
        {/* image */}
        <img
          className={styles.logoImg}
          src={NetflixBanner}
          alt="NetflixBanner logo"
        />

        {/* title */}
        <h1 className={styles.Title}>{bannerImage?.original_name}</h1>

        {/* description */}
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview,120)}
        </h1>
        <div className={styles.buttoncontainer}>
          <button className={styles.button}>
            <Play size={20} />
            Play
          </button>
          <button className={styles.button}>
            {" "}
            <Info size={20} />
            My List
          </button>
        </div>
        {/* button */}
      </div>
      <div className={styles.fadebottom}>{/* fading */}</div>
    </div>
  );
}

export default Banner;
