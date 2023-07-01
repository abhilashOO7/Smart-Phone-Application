import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import phone_icon from "../images/phone_icon.png";
import cart_img from "../images/cart_img.png";
import { ButtonContainer } from "./Button";
import '../App.css';


// The Top Navbar Section

export default class Navbar extends Component {
  render() {
    return (

      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">

        <div className="container-fluid">

          <Link to="/">
            <img src={phone_icon} alt="store" className="navbar-brand" />
          </Link>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <form className="form-inline my-3 ms-auto ps-5" >
              <input className="form-control me-sm-1 ps-5 pe-5" id="searchbar" type="search" placeholder="Search for SmartPhones" aria-label="Search" />
            </form>



            <Link to="/cart" className="ms-auto">
              <ButtonContainer>
                <span className="me-2">
                  <img src={cart_img} alt="store" className="navbar-brand" width={35} height={40} />
                </span>
                <b>my cart</b>
              </ButtonContainer>
            </Link>

          </div>

        </div>

      </Nav>

    );
  }
}


const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;