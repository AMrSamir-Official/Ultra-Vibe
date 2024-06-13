import "./About.scss";

const ChefCooking =
  "https://www.foodandwine.com/thmb/X9UE38dZW_yqusiPh0smc_6iFKo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top-chef-cooking-tips-FT-BLOG0621-e1962be3ee4b453989313479a0214cce.jpg";
const kitchenImage =
  "https://us-en-cdn.square.ncms.io/content/uploads/2022/10/ph200903_CAEN_KDS_LighthouseBK_Interior_PF_02_VR_01_SIMP.jpg.jpeg";

const About = () => {
  return (
    <div id="about" className="description-page">
      <header>
        <h1>Welcome to Our Restaurant</h1>
      </header>
      <section className="description-section">
        <div className="description-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, est in fermentum ullamcorper, erat metus fermentum orci,
            eget faucibus nunc nulla at dui.
          </p>
          <p>
            Nullam vehicula, purus sed congue tincidunt, magna eros tempor
            ligula, non cursus ex felis in justo. Nulla facilisi. Curabitur in
            est vel mauris elementum malesuada nec eget nulla.
          </p>
          <p>
            Suspendisse potenti. Donec bibendum tortor eu risus volutpat, et
            iaculis nunc elementum. Maecenas non justo laoreet, interdum ante
            eget, posuere massa.
          </p>
        </div>
        <div className="description-image">
          <img src={kitchenImage} alt="Restaurant Interior" />
        </div>
      </section>
      <section className="description-section">
        <div className="description-content">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, est in fermentum ullamcorper, erat metus fermentum orci,
            eget faucibus nunc nulla at dui.
          </p>
          <p>
            Nullam vehicula, purus sed congue tincidunt, magna eros tempor
            ligula, non cursus ex felis in justo. Nulla facilisi. Curabitur in
            est vel mauris elementum malesuada nec eget nulla.
          </p>
          <p>
            Suspendisse potenti. Donec bibendum tortor eu risus volutpat, et
            iaculis nunc elementum. Maecenas non justo laoreet, interdum ante
            eget, posuere massa.
          </p>
        </div>
        <div className="description-image">
          <img src={ChefCooking} alt="Chef Cooking" />
        </div>
      </section>
    </div>
  );
};

export default About;
