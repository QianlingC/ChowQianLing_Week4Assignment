import {
  CallOutlined,
  EmailOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import React from "react";
import contact from "../images/contact.jpg";
import "./Contact.css";

const Contact = () => {
  const myContact = {
    backgroundImage: `url(${contact}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70vh",
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-centered">
            <div className="contact-bg" style={myContact}>
              <h1 className="d-flex display-2 contact-title">CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2 pt-3 pb-3 mb-2">
        <div className="row justify-content-between">
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <LocationOnOutlined />
                <h5 className="card-title">Locate Us</h5>
                <p className="card-text">
                  Singapore: Block 156 Glass Road #15-987 Singapore 169874
                  Rainbow Tower
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <EmailOutlined />
                <h5 className="card-title">Email Us</h5>
                <p className="card-text">
                  General Enquires: abc@gmail.com Technical Issues:
                  dfg@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <CallOutlined />
                <h5 className="card-title">Call Us</h5>
                <p className="card-text">Singapore: +65 61234567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
