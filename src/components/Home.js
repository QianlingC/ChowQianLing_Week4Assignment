import React from "react";
import "./Home.css";
import running from "../images/running.jpeg";
import soccer from "../images/soccer.jpeg";
import swimming from "../images/swimming.jpeg";
import FormTable from "./FormTable";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={running} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Sports Hub</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={soccer} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore sports varieties</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={swimming} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Share your passion</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="jumbotron d-flex align-items-center min-vh-50 m-2 p-3">
        <div className="container text-center">
          <h1 className="display-3">SCOREBOARD</h1>
          <h5>Fill in the Player's Name, Sports Type and Score</h5>
          <FormTable />
        </div>
      </div>
    </>
  );
};
export default Home;
