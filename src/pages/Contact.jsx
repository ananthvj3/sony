import React, { useState } from 'react';
import image1 from "../images/h-phone1.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../App.css"

const Contact = () => {
  const { message, setMessage } = useState([])

  const handleClick = () => {
    message = alert("Thank you for your Feedback...!")
  }

  return (
    <>
      <section className="contact min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="container">
          <img src={image1} className='bgimage position-absolute top-0 start-0 w-100 vh-100 object-fit-cover  position-fixed' />
          <div className="row justify-content-center z-3">
            <div className="col-lg-8 col-md-10">
              <div className="card shadow-lg border-0 rounded-4 p-4">
                <div className="card-body text-center">
                  <h1 className="text-primary fw-bold mb-3">Contact Us</h1>
                  <p className="text-muted mb-4">
                    Please submit any questions, concerns, or feedback below along with your name and email address.
                  </p>

                  <form onSubmit={() => handleClick(setMessage)} className="text-start">
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label fw-semibold">First Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg border-primary-subtle shadow-sm"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Last Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg border-primary-subtle shadow-sm"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email Address</label>
                      <input
                        type="email"
                        className="form-control form-control-lg border-primary-subtle shadow-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Message</label>
                      <textarea
                        className="form-control form-control-lg border-primary-subtle shadow-sm"
                        rows="5"
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="con-font text-center mt-4 d-flex flex-row align-items-center justify-content-between ">
                <div className="d-flex flex-row gap-2 fs-4">
                  <h5><FaInstagram /></h5>
                  <h5><FaTwitter /></h5>
                  <h5><FaFacebook /></h5>
                </div>
                <p className="mb-0 text-light">© 2025 YourStore. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;