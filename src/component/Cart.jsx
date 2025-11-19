import React, { useContext, useMemo } from "react";

import GlobalContext from "../GlobalContext";
import image1 from '../images/h-phone2.jpg'

import "../App.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(GlobalContext);
  const navigate=useNavigate();

  const handleIncrease = (name) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, qty: (item.qty || 1) + 1 } : item
      )
    );
  };

  const handleDecrease = (name) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name && item.qty > 1
          ? { ...item, qty: (item.qty || 1) - 1 }
          : item
      )
    );
  };

  const handleDelete = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (acc, cur) => acc + (cur.price || 0) * (cur.qty || 1),
      0
    );
  }, [cart]);

  const handleClick=()=>{
    navigate("/checkout")

  }

  return (
    <section className="container ">
       <img src={image1} className='bgimage position-absolute start-0 w-100 vh-100 object-fit-cover opacity-80 position-fixed ' />
      
      <h2 className=" z-3 text-center mb-5 fw-bold display-6 text-primary">
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-muted fs-4">Your cart is empty.</div>
      ) : (
        <>
          <div className="row g-4 justify-content-center ">
            {cart.map((item) => (
              <div
                key={item.name}
                className="col-md-6 col-lg-5 col-xl-4"
              >
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden hover-zoom">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img
                        src={
                          item?.images?.[0]?.img
                          
                        }
                        alt={item.name}
                        className="img-fluid h-100 object-fit-cover"
                      />
                    </div>

                    <div className="col-7 p-3">
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="text-muted mb-1">₹{item.price}</p>

                      <div className="d-flex align-items-center gap-2 my-2">
                        <button
                          className="btn btn-sm btn-outline-dark rounded-circle"
                          onClick={() => handleDecrease(item.name)}
                        >
                          −
                        </button>
                        <span className="fw-semibold">{item.qty || 1}</span>
                        <button
                          className="btn btn-sm btn-outline-dark rounded-circle"
                          onClick={() => handleIncrease(item.name)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-sm btn-outline-danger mt-2 w-100 fw-semibold"
                        onClick={() => handleDelete(item.name)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
  className="checkout text-center mt-5 p-4   rounded-4 shadow-sm position-relative"
  style={{ zIndex: 1000 }}
>
  <h4 className="fw-bold text-danger">
    Total Price: <span className="text-success">₹{totalPrice.toFixed(2)}</span>
  </h4>
  <button onClick={()=> handleClick()} className="btn btn-success mt-3 px-5 py-2 fw-semibold shadow-sm">
    Proceed to Checkout
  </button>
</div>
        </>
      )}
    </section>
  );
};

export default Cart;
