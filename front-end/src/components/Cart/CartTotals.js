import React, { Component } from "react";
import { Link } from "react-router-dom";

// In the cart page, the amount and total pricing of items' section

export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mt-5 mb-5 ms-md-5 ms-md-auto col-sm-3 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-5 px-5 ms-4"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal &nbsp;</span>{" "}
                  <strong>Rs.&nbsp; {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> gst&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
                  <strong>Rs.&nbsp; {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
                  <strong>Rs.&nbsp; {cartTotal} </strong>
                </h5>  
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
