import React from "react";
import about from "../images/about.jpg";
import cricket from "../images/cricket.jpeg";
import "./About.css";

const About = () => {
  const myAbout = {
    backgroundImage: `url(${about}`,
    height: "60vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div
        className="about-bg d-flex justify-content-center align-items-center"
        style={myAbout}
      >
        <h1 className="about-title display-2">ABOUT US</h1>
      </div>

      <div className="container">
        <div className="row m-2 p-3">
          <div className="col-6">
            <img className="img-cricket" src={cricket} />
          </div>

          <h5 className="text w-50 p-3 border">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h5>
        </div>
      </div>
    </>
  );
};
export default About;
