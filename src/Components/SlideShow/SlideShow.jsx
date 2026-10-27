import MovieCard from "../MovieCard/MovieCard";
import styles from "./SlideShow.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function SlideShow({ title, Movies }) {
  
  return (
    <div className={styles.title}>
      <h2>{title}</h2>

      <div className={styles.row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.8}
        >
          {Movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard Movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
