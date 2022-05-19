import React from "react";
import banner from "../public/images/banner.png";
function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Fre(e)vent</h2>
      <span className="section__subtitle">Introduction</span>
      <div className="about__container container grid">
        <img src={banner.src} alt="" className="about__img"></img>

        <div className="about__data">
          <p className="about__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">20k+</span>
              <span className="about__info-name">Events</span>
            </div>

            <div>
              <span className="about__info-title">10k+</span>
              <span className="about__info-name">Users</span>
            </div>

            <div>
              <span className="about__info-title">100+</span>
              <span className="about__info-name">Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
