import React from "react";
import { useNavigate } from 'react-router-dom';
import image1 from "../images/h-phone1.jpg";
import image2 from "../images/h-phone2.jpg";
import { GiSoundWaves } from "react-icons/gi";
import { FaBluetoothB } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { FaHeadphonesSimple } from "react-icons/fa6";
import "../App.css";

const Home = () => {
   const navigate=useNavigate()
    const handleData=()=>{
        navigate("/products")
    }
  return (
    <>
      {/* Hero Section */}
      <section className="home">
        <div className="position-relative w-100 vh-100 text-center text-white d-flex justify-content-center align-items-center overflow-hidden">
          <img
            src={image1}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover "
            alt="Headphone background"
          />
          <div className="position-relative z-3 px-3">
            <h3 className="fw-light fs-4">Soundbeem ERD - 3083</h3>
            <h1 className="fw-bold display-5 display-md-3 mb-4">
              Reinventing sound experience.
            </h1>
            <button onClick={()=>handleData()}className="btn btn-light btn-lg rounded-pill px-4 py-2 shadow-sm">
              Shop now!
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="details position-relative w-100 text-white d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <img
          src={image2}
          alt="Product display"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-"
        />

        <div className="container position-relative z-3 h-100 py-5 d-flex align-items-center justify-content-center">
          <div className="row w-100 text-center gy-4">
            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center gap-3 p-3">
              <h1><GiSoundWaves /></h1>
              <h4>High Quality Sound</h4>
              <p className="small">
                Experience crystal-clear sound with deep bass and precision
                tuning for every beat.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center gap-3 p-3">
              <h1><FaBluetoothB /></h1>
              <h4>Easy Wireless Listening</h4>
              <p className="small">
                Connect instantly with Bluetooth 5.3 technology for seamless,
                lag-free playback.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center gap-3 p-3">
              <h1><IoIosFlash /></h1>
              <h4>Longer Battery Life</h4>
              <p className="small">
                Enjoy up to 40 hours of continuous playtime with fast charging
                support.
              </p>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center gap-3 p-3">
              <h1><FaHeadphonesSimple /></h1>
              <h4>Sleek Updated Design</h4>
              <p className="small">
                Lightweight and stylish, designed to fit comfortably all day
                long.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
