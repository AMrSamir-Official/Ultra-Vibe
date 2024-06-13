import MenuItem from "../../components/MenuItem/MenuItem";
import "./Menu.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Menu({ MenuObj, MenuName }) {
  return (
    <div className="menu-container">
      <h2 className="title">{MenuName} </h2>
      <div className="menu">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          clickable={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {MenuObj.map((item) => (
            <SwiperSlide key={item.id}>
              <MenuItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Menu;
