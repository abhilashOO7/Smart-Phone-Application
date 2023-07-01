import React, { Component } from "react";

// In the cart page, the titles of the columns

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block mt-5 mb-4">
                <div className="row ">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"><b>products</b></p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"><b>name of product</b></p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"><b>price</b></p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"><b>quantity</b></p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"><b>remove</b></p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"><b>total</b></p>
                    </div>
                </div>
            </div>
        );
    }
}
