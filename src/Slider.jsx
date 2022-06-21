import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../src/img/categories/cat-1.jpg";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Slider.css";
import "./css/style.css";
import Kotoha from "./img/fea.png";
import { Link } from "react-router-dom";
export default function Silder() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3].map((a, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={Banner} alt="1  " className="slide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <section
        className="featured spad"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
          <div className="featured__item">
            <img className="categories__item set-bg" src={Kotoha} alt="" />
            <div className="featured__item__text">
              <h6>
                <a href="#">귀여운 코토하</a>
              </h6>
              <h5>1,000,000,000,000 원</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
          <div className="featured__item">
            <img className="categories__item set-bg" src={Kotoha} alt="" />
            <div className="featured__item__text">
              <h6>
                <a href="#">귀여운 코토하</a>
              </h6>
              <h5>1,000,000,000,000 원</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
          <div className="featured__item">
            <img className="categories__item set-bg" src={Kotoha} alt="" />
            <div className="featured__item__text">
              <h6>
                <a href="#">귀여운 코토하</a>
              </h6>
              <h5>1,000,000,000,000 원</h5>
            </div>
          </div>
        </div>
      </section>
      <Link
        to="view"
        style={{ textAlign: "center", display: "block", marginBottom: "40px" }}
      >
        상품 더보기
      </Link>
    </div>
  );
}
