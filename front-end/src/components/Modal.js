import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

// The backdrop section -- that is on clicking the add to cart icon, a pop-up of backdrop will appear

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                                            id="modal"
                                        >
                                            <h4>item added to cart</h4>

                                            <img src={img} className="img-fluid" alt="" />
                                            <br /><br />
                                            <h5>{title}</h5>
                                            <br />
                                            <h5 className="text-muted">price&nbsp; --&nbsp; Rs.&nbsp;&nbsp;{price}</h5>
                                            <br />
                                            <Link to="/">
                                                <ButtonContainer
                                                    onClick={() => {
                                                        closeModal();
                                                    }}
                                                >
                                                    Continue Shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer
                                                    cart
                                                    onClick={() => {
                                                        closeModal();
                                                    }}
                                                >
                                                    Go To Cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

// Styling of the modal

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
