import React from "react";
import "../App.css";
import image1 from '../images/h-phone2.jpg'
const Login = () => {
  return (
    <>
      <section className="checkout d-flex align-items-center min-vh-100 justify-content-center">
           <img src={image1} className='bgimage position-absolute start-0 w-100 vh-100 object-fit-cover opacity-80 position-fixed ' />
        <div className="container">
          <div className="row justify-content-center">
           
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow border-0 rounded-4">
                <div className="card-body p-4 p-md-5 d-flex flex-column align-items-center">
                  
                  <div className="sign-in bg-primary rounded-circle mb-3 d-flex align-items-center justify-content-center"
                       style={{ width: "60px", height: "60px" }}>
                    <span className="text-white fw-bold fs-4">L</span>
                  </div>

                  <h3 className="text-center mb-1">Login</h3>
                  <p className="text-muted text-center mb-4">
                    Use your email and password to continue
                  </p>

                  
                  <div className="d-flex flex-column flex-sm-row gap-2 w-100 mb-3">
                    <button className="btn btn-light border text-muted w-100">
                      Google
                    </button>
                    <button className="btn btn-light border text-muted w-100">
                      GitHub
                    </button>
                  </div>

                 
                  <div className="d-flex align-items-center w-100 mb-3">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-muted small">or</span>
                    <hr className="flex-grow-1" />
                  </div>

                  
                  <form className="w-100">
                    <div className="mb-3 text-start">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="123@gmail.com"
                        required
                      />
                    </div>

                    <div className="mb-3 text-start">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-2 py-2 fw-semibold"
                    >
                      Sign In
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
