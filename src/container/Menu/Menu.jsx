import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import Menu from "../../components/Menu/Menu";
import {
  Appetizers,
  Beverages,
  Desserts,
  MainCourses,
  SpecialtyItems,
} from "../../constants/menus";
import "./Menu.scss";

register();

function Menus() {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menus">
        <Menu MenuObj={Appetizers} MenuName="Appetizers" />
        <Menu MenuObj={MainCourses} MenuName="MainCourses" />
        <Menu MenuObj={Desserts} MenuName="Desserts" />
        <Menu MenuObj={Beverages} MenuName="Beverages " />
        <Menu MenuObj={SpecialtyItems} MenuName="SpecialtyItems" />
      </div>
    </section>
  );
}

export default Menus;
