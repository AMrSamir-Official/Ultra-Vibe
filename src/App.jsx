import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Header, Landing, Menu, Reservation } from "./container";

import "swiper/css";
import "swiper/css/pagination";

const App = () => (
  <div className="app">
    <Header />

    <Navbar />
    <Landing />

    <Menu />
    <About />
    <Reservation />
    <Footer />
  </div>
);

export default App;
