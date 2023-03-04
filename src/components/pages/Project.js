import React from "react";
import MOODMIX from '../assets/moodmix-demo.gif';
import Quiz from '../assets/quizDemo.gif';
import Weather from '../assets/weatherDemo.gif';
import Contact from '../assets/contactDemo.gif';
import WorkDayScheduler from '../assets/workdayDemo.gif';
import NewYork from '../assets/newyorkDemo.gif';
import Blackjack from '../assets/pokemonDemo.gif';
import WeightHeight from '../assets/weightDemo.gif';
import RDX from '../assets/beltDemo.gif';
import "../../css/Projects.css";


function Project() {
  return (
    <div className="container myprojects-container mt-4">
         <h2 id="my-projects" class="projects-header mb-4"> <a id="my-projects">myProjects</a></h2>

  <div className="personal-projects row align-items-start">
    {/*Card MOODMIX*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">MOODMIX</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/MoodMix/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={MOODMIX}
              alt="A gif of the app"
            />
          </a>
          <p className="card-text">A fusion of flavors and inspiration.</p>
        </div>
      </div>
    </div>
    {/*Card QUIZ*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">Quiz</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/Vinh-s-Master-Quiz//"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={Quiz}
              alt="A gif of my quiz"
            />
          </a>
          <p className="card-text">A quiz with highscore table.</p>
        </div>
      </div>
    </div>
    {/*Card WEATHERAPP*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">WeatherApp</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/VinhsWeatherApp/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={Weather}
              alt="A gif of my weatherapp"
            />{" "}
          </a>
          <p className="card-text">
            Search for the weather using a city name.{" "}
          </p>
        </div>
      </div>
    </div>
    {/*Card CONTACT FORM*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">Contact Form</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/contactform/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={Contact}
              alt="A gif of my contact form landing page"
            />{" "}
          </a>
          <p className="card-text">A visitor contact form.</p>
        </div>
      </div>
    </div>
    {/*Card WORK DAY SCHEDULER*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">Work day scheduler</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/Vinhs-WorkDayScheduler/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={WorkDayScheduler}
              alt="A gif of my work day scheduler"
            />{" "}
          </a>
          <p className="card-text">Add tasks for the day.</p>
        </div>
      </div>
    </div>
    {/*Card NEW YORK TIMES API*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">New York Times API</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/newYorkTimesQuery/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={NewYork}
              alt="A gif of my new york times article search page"
            />{" "}
          </a>
          <p className="card-text">
            Search for articles from the New York times.
          </p>
        </div>
      </div>
    </div>
    {/*Card BLACKJACK GAME*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">Blackjack Game</h4>
          <a
            className="thumbnail"
            href="https://vinhblackjack.netlify.app/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={Blackjack}
              alt="A gif of my blackjack-game landing page"
            />
          </a>
          <p className="card-text">Pokemon themed blackjack.</p>
        </div>
      </div>
    </div>
    {/*Card WEIGHT CONVERTERr*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">Weight + Height Converter</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/weightheightconverter/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={WeightHeight}
              alt="A gif of my weight-converter landing page"
            />
          </a>
          <p className="card-text">A metrics conversion calculator.</p>
        </div>
      </div>
    </div>
    {/*Card RDX Landing page*/}
    <div className="cardContainer col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-body card-style">
          <h4 className="card-title">RDX Landing page</h4>
          <a
            className="thumbnail"
            href="https://vinhkietla.github.io/ProductLandingPage/"
            target="_blank"
          >
            <img
              className="projects-icon img-fluid"
              src={RDX}
              alt="A gif of my rdx landing page"
            />
          </a>
          <p className="card-text">
            A page created for a weight lifting belt I use.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Project;
