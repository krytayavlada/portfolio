import React from 'react';
import girlPhoto from '../images/girl.jpg'; // <-- импортируем картинку

function About() {
  return (
    <section className="main-hero">
      <img
        className="hero-img"
        src={girlPhoto}   // <-- используем импортированную переменную
        width="146"
        height="146"
        alt="Фотография девушки"
      />
      <div className="hero-wrapper">
        <h2 className="hero-title">About</h2>
        <p className="hero-biography">
          I am a web developer with a background in computer science and over five years of experience in building web applications. I have a passion for creating intuitive and responsive user interfaces.
        </p>
      </div>
    </section>
  );
}

export default About;
