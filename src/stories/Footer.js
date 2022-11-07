import { Email, Home, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start footer-top">
      <section className="company-info">
        <div className="container border-top text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Sports Hub
              </h6>
              <p>Find your favourite sports</p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/Home">Home</Link>
              </p>
              <p>
                <Link to="/About">About</Link>
              </p>
              <p>
                <Link to="/Contact">Contact</Link>
              </p>
              <p>
                <Link to="/Players">Players</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <Home sx={{ pr: 1 }} />
                Block 156 Glass Road #15-987 Singapore 169874, Rainbow Tower
              </p>
              <p>
                <Email sx={{ pr: 1 }} />
                General Enquires: abc@gmail.com Technical Issues: dfg@gmail.com
              </p>
              <p>
                <Phone sx={{ pr: 1 }} />
                +65 61234567
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center text-white p-4"
        style={{ backgroundColor: "#058A3C" }}
      >
        <h6 className="text-white"> © 2022 Copyright: Sport Hub</h6>
      </div>
    </footer>
  );
};
export default Footer;
