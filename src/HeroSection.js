import photoGrid from "./images/photo-grid.png";

function HeroSection() {
  return (
    <section className="hero-section">
        <div className="img__container">
        <img src={photoGrid} className="hero__img" alt="Airbnb photo grid" />
        </div>
      <div className="hero__content">
        <h1 className="hero__content__title">Online Experiences</h1>
        <p className="hero__content__paragraphe">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
