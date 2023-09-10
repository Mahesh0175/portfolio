import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import NEWS from "../../img/news.png";
import Ecommerce from "../../img/ecommerce.png";
import TEXT from "../../img/text.png";
import TASK from "../../img/task.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            rel="noopener noreferrer"
            href="https://react-news-app-me.netlify.app"
            target="_blank"
          >
            <img src={NEWS} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            rel="noopener noreferrer"
            href="https://ecom-by-mahesh.netlify.app"
            target="_blank"
          >
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            rel="noopener noreferrer"
            href="https://textutils-react-app-me.netlify.app/"
            target="_blank"
          >
            <img src={TEXT} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mahesh-mankar-044772238"
            target="_blank"
          >
            <img src={TASK} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
