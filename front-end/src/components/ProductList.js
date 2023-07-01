import React from 'react';
import '../App.css';
import Product from "./Product";
import Title from "./Title";
import styled from "styled-components";
import { ProductConsumer } from "../context";

const ProductList = ({setLoginUser}) => {

    return (
        <div className="ProductList">
            <ProductWrapper className="py-5">
                
                <div className="container">

                    <Title name="" title="go through some of my best products" />
                    <br />
                    {/* eslint-disable-next-line */}
                    <marquee>Now Get the best price of your favorite mobiles only here. Avail a discount of around 50% off. | So, without wasting any further time, go ahead and grab the deals. Also, get additional discounts by making payments through Paytm, Phone Pe, Google Pay or any other UPI wallets.</marquee>
                    <br /><br />
                    <div className="row">
                        {/* Mapping the product and details together by calling the ProductConsumer component */}
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </ProductWrapper>
            </div>
    );
}

const ProductWrapper = styled.section``;
export default ProductList