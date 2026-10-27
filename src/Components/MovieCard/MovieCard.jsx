import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
function MovieCard({ Movie }) {
  let genres = ["Adventure", "Action", "Thriller"];
  return (
    <div className={styles.carrdwrapper}>
      {/* poster img */}
      <img
        className={styles.Poster}
        src={`${IMAGE_BASE}${Movie?.poster_path}`}
        alt="poster img"
      />

      {/* hover card */}
      <div className={styles.HoverCard}>
        {/* img */}

        <img
          className={styles.Hoverimg}
          src={`${IMAGE_BASE}${Movie?.poster_path}`}
          alt="Hover img"
        />

        {/* badge */}
        <div className={styles.Badge}>Recently Added</div>

        {/* button */}
        <div className={styles.ButtonRow}>
          <FaCirclePlay
            className={styles.CircleButton}
            color="white"
            size={20}
          />
          <BsPlayCircle
            className={styles.CircleButton}
            color="white"
            size={20}
          />
          <GoCheckCircleFill
            className={styles.CircleButton}
            color="white"
            size={20}
          />
          <IoIosArrowDropdownCircle
            className={styles.CircleButtonSmall}
            color="white"
            size={20}
          />
        </div>

        {/* meta data */}
        <div className={styles.MetaData}>
          <span className={styles.tag}>U/A 16+c</span>
          <span className={styles.tag}>Movies</span>
          <span className={styles.tag}>HD</span>
        </div>
        {/* genres */}
        <div className={styles.genres}>
          {genres.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.Dot}> • </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
