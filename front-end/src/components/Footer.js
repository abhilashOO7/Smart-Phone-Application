import React from "react";
import '../App.css'
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";

// The footer section to be displayed in every page

export default function Footer() {
    return (
        <div className="container-fluid" id="footer">

            <ul class="list-unstyled" id="bot1">
                <p className="mb-4"><b>MY ACCOUNT</b></p>

                <li className="list-item">Orders</li>
                <br />
                <li className="list-item">Returns/Refunds</li>
                <br />
                <li className="list-item">Track Order</li>
                <br />
                <li className="list-item">Frequently asked questions</li>
            </ul>

            <ul class="list-unstyled" id="bot1">
                <p className="mb-4"><b>POLICIES</b></p>
                <li className="list-item">Payment Options</li>
                <br />
                <li className="list-item">Terms and conditions of use</li>
                <br />
                <li className="list-item">Terms and conditions of Membership program</li>
                <br />
                <li className="list-item">Other terms and conditions</li>
                <br />
                <li className="list-item">Returns and exchange policy</li>
                <br />
                <li className="list-item">Shipping policy</li>
                <br />
                <li className="list-item">Privacy policy</li>
                <br />
                <li className="list-item">Safety Checklist</li>
            </ul>

            <ul class="list-unstyled" id="bot1">
                <p className="mb-4"><b>CONTACT US</b></p>
                <li className="list-item">Customer Support</li>
                <br />
                <li className="list-item">Store locators</li>
                <br />
                <li className="list-item">Help Center</li>
                <br /><br /><br />

                <p className="mb-4"><b>ABOUT US</b></p>
                <li className="list-item">Official Brand Store</li>
                <br />
                <li className="list-item">About Us</li>
                <br />
                <li className="list-item">Careers</li>
            </ul>


            <br />

            <ul class="list-unstyled">
                <p className="text-center mb-4"><b>SOCIAL</b></p>
                <li className="list-item"><img src={facebook} alt="store" className="navbar-brand" width={20} height={20} />&nbsp;&nbsp;Facebook</li>
                <br />
                <li className="list-item"><img src={twitter} alt="store" className="navbar-brand" width={20} height={20} />&nbsp;&nbsp;Twitter</li>
                <br />
                <li className="list-item"><img src={youtube} alt="store" className="navbar-brand" width={20} height={20} />&nbsp;&nbsp;YouTube</li>
                <br />
                <li className="list-item"><img src={instagram} alt="store" className="navbar-brand" width={20} height={20} />&nbsp;&nbsp;Instagram</li>
            </ul>

        </div>
    )
};
