import React, { Component } from "react";
import delete_icon from "../../images/delete_icon.png";

// In the cart page, the products and quantities and icon to remove product

export default class CartItem extends Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        const { increment, decrement, removeItem } = this.props.value;

        return (
            <div className="row my-1 mt-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img
                        src={img}
                        style={{ width: "5rem", heigth: "5rem" }}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                    <br/>
                    <span className="d-lg-none">product :</span> {title}
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                <br/>
                    <strong>
                        <span className="d-lg-none">price :</span> Rs.&nbsp;&nbsp;{price}
                    </strong>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                    <div className="d-flex justify-content-center">
                        <div>
                        <br/>
                            <span
                                className="btn btn-black mx-1"
                                onClick={() => {
                                    return decrement(id);
                                }}
                            >
                                -
                            </span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span
                                className="btn btn-black mx-1"
                                onClick={() => {
                                    return increment(id);
                                }}
                            >
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                <br/>
                    <div className=" cart-icon" onClick={() => removeItem(id)}>
                        <img src={delete_icon} alt="store" width={15} height={20} />
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                <br/>
                    <strong>item total : Rs.&nbsp;&nbsp;{total} </strong> 
                </div>
            </div>
        );
    }
}
