import "swiper/css";
import "swiper/css/effect-fade";
import {
  A11y,
  Autoplay,
  Controller,
  EffectCreative,
  FreeMode,
  HashNavigation,
  Manipulation,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../constants";
import "./Landing.scss";
function About() {
  return (
    <Swiper
      id="home"
      loop={true}
      autoplay={{ delay: 13000, disableOnInteraction: false }}
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Parallax,

        FreeMode,
        Manipulation,
        Controller,
        HashNavigation,
        Autoplay,
        EffectCreative,
      ]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {" "}
        <div
          style={{ "background-image": `url(${images.landing2})` }}
          className="app__About"
        >
          <span>welcome to Ultra Vibe</span>
          <h1>Delicious Food & Wonderful Eating Experience</h1>
          <p>We Serve Food, Harmony, & Laughter Since 1998</p>
          <button>view full menu</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div
          style={{ "background-image": `url(${images.landing5})` }}
          className="app__About"
        >
          <span>welcome to Ultra Vibe</span>
          <h1>Delicious Food & Wonderful Eating Experience</h1>
          <p>We Serve Food, Harmony, & Laughter Since 1998</p>
          <button>view full menu</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div
          style={{ "background-image": `url(${images.landing6})` }}
          className="app__About"
        >
          <span>welcome to Ultra Vibe</span>
          <h1>Delicious Food & Wonderful Eating Experience</h1>
          <p>We Serve Food, Harmony, & Laughter Since 1998</p>
          <button>view full menu</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div
          style={{ "background-image": `url(${images.landing3})` }}
          className="app__About"
        >
          <span>welcome to Ultra Vibe</span>
          <h1>Delicious Food & Wonderful Eating Experience</h1>
          <p>We Serve Food, Harmony, & Laughter Since 1998</p>
          <button>view full menu</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default About;
