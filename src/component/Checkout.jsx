import React, { useContext, useMemo } from "react";
import GlobalContext from "../GlobalContext";
import image1 from '../images/h-phone2.jpg'
import '../App.css'

const Checkout = () => {
    const { check, setCheck } = useContext(GlobalContext);
    return (
        <section className="py-5 bg-light">
            
            <div className="check-container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary">Checkout</h2>
                    <p className="text-muted mb-0">
                        Review your order and complete your purchase securely.
                    </p>
                </div>

                <div className="row g-4">

                    <div className="col-lg-8">

                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-header bg-white border-0">
                                <h5 className="mb-0 fw-semibold  text-primary">Billing Details</h5>
                            </div>
                            <div className="card-body">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ananth"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Kumar"
                                             required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="you@example.com"
                                             required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="+91 98765 43210"
                                             required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Street address"
                                             required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Chennai"
                                             required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="form-label">State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="TN"
                                             required
                                        />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="form-label">Pin Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="600001"
                                             required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <div className="form-check mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="save-info"
                                                defaultChecked
                                                 required
                                            />
                                            <label className="form-check-label" htmlFor="save-info">
                                                Save this information for next time
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 fw-semibold">Payment</h5>
                                <span className="badge bg-success-subtle text-success border border-success rounded-pill px-3 py-2">
                                    <i className="bi bi-shield-lock me-1" />
                                    100% Secure
                                </span>
                            </div>
                            <div className="card-body">
                                
                                <div className="mb-3">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="card"
                                            defaultChecked
                                             required
                                        />
                                        <label className="form-check-label" htmlFor="card">
                                            Credit / Debit Card
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="upi"
                                             required
                                        />
                                        <label className="form-check-label" htmlFor="upi">
                                            UPI
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="cod"
                                             required
                                        />
                                        <label className="form-check-label" htmlFor="cod">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                </div>

                               
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label">Name on Card</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Same as on card"
                                             required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label">Card Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="1234 5678 9012 3456"
                                             required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Expiry Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="MM/YY"
                                             required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">CVV</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="***"
                                             required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <button
                                            type="button"
                                            className="btn btn-dark w-100 py-2 mt-2"
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                </form>

                                <p className="text-muted small mt-3 mb-0 text-center">
                                    By placing your order, you agree to our{" "}
                                    <a href="#!" className="text-decoration-none">
                                        Terms & Conditions
                                    </a>{" "}
                                    and{" "}
                                    <a href="#!" className="text-decoration-none">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white border-0">
                                <h5 className="mb-0 fw-semibold text-primary">Order Summary</h5>
                            </div>
                            <div className="card-body">
                              
                                <div className="d-flex align-items-center mb-3">
                                    
                                    <div className="flex-grow-1">
                                        
                                        <p className="mb-0 fw-semibold">Sony ULT Wear</p>
                                        <small className="text-muted">Noise Cancelling</small>
                                    </div>
                                    <span className="fw-semibold">₹6,999</span>
                                
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-grow-1">
                                        <p className="mb-0 fw-semibold">Boat Rockerz 551</p>
                                        <small className="text-muted">Wireless Headphone</small>
                                    </div>
                                    <span className="fw-semibold">₹2,499</span>
                                
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Subtotal</span>
                                    <span></span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Shipping</span>
                                    <span className="text-success">Free</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="text-muted">GST</span>
                                    <span>₹800</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="fw-bold">Total</span>
                                    <span className="fw-bold fs-5">₹10,298</span>
                                </div>

                                
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter coupon code"
                                    />
                                    <button className="btn btn-outline-dark" type="button">
                                        Apply
                                    </button>
                                </div>

                                <div className="bg-light rounded-3 p-3 small">
                                    <div className="d-flex">
                                        <i className="bi bi-truck fs-4 me-2" />
                                        <div>
                                            <div className="fw-semibold">Expected Delivery</div>
                                            <div className="text-muted">
                                                Within <strong>3–5 business days</strong>.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Help Box */}
                        <div className="card border-0 shadow-sm mt-3">
                            <div className="card-body small">
                                <div className="d-flex">
                                    <i className="bi bi-headset fs-4 me-2" />
                                    <div>
                                        <div className="fw-semibold">Need help?</div>
                                        <div className="text-muted">
                                            Call us at +91-1800-123-4567 or chat with support.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
