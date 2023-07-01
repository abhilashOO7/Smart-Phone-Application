import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom";
import '../App.css';

//  -----    BackEnd Section of Registration Page Runs Here      ------

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:3000/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invalid input")
        }

    }

//  -----    FrontEnd (UI) Section of Registration Page Runs Here      ------

    return (

        <div className="register" id="login_page">

            {console.log("User", user)}


            <form className="row g-4 pe-0 mt-1 mb-1 justify-content-center">

                <h5 className="mt-4 mb-4 text-center"><b>First-Time users need to register here before logging in </b></h5>

                <div className="col-md-5">
                    <label for="FirstName" className="form-label"><b>Enter your Name</b></label>

                    <input type="text" className="form-control" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                </div>


                <div className="col-md-5">
                    <label for="Email" className="form-label"><b>Enter your Email</b></label>

                    <input type="text" className="form-control" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                </div>
                <div className="col-md-5">
                    <label for="Password" className="form-label"><b>Enter your Password</b></label>

                    <input type="password" className="form-control" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                </div>

                <div className="col-md-5">
                    <label for="Password" className="form-label"><b>Re-Enter your Password</b></label>

                    <input type="password" className="form-control" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                </div>


                <div className="col-10">
                    <label for="Address" className="form-label"><b>Enter your Address</b></label>
                    <input type="text" className="form-control" id="address" placeholder="234, Park Street, 5th Avenue" />
                </div>
                <div className="col-10">
                    <label for="Address" className="form-label"><b>Address Line 2</b></label>
                    <input type="text" className="form-control" id="address" placeholder="Enter nearby places, landmarks or street name" />
                </div>

                <br />

                <div className="col-md-4">
                    <label for="City" className="form-label"><b>Enter your City</b></label>
                    <input type="text" className="form-control" id="city" placeholder="Kolkata" />
                </div>


                <div className="col-md-4">
                    <label for="State" className="form-label"><b>Choose Your State</b></label>
                    <select id="state" className="form-select">
                        <option selected>Choose from the dropdown...</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chhattisgarh</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Haryana</option>
                        <option>Himachal Pradesh</option>
                        <option>Jharkhand</option>
                        <option>Karnataka</option>
                        <option>Kerala</option>
                        <option>Madhya Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Manipur</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Odisha</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim</option>
                        <option>Tamil Nadu</option>
                        <option>Telangana</option>
                        <option>Tripura</option>
                        <option>Uttar Pradesh</option>
                        <option>Uttarakhand</option>
                        <option>West Bengal</option>
                    </select>
                </div>


                <div className="col-md-2">
                    <label for="ZipCode" className="form-label"><b>Enter Your Zip Code</b></label>
                    <input type="tel" className="form-control" id="zip" placeholder="712123" />
                </div>


                <div className="col-10 text-center">
                    <button type="submit" className="btn btn-danger mt-5 mb-2" onClick={register}>Sign Up</button>
                </div>


                <div className="col-10 text-center">or</div>


                <div className="col-10 text-center">
                    <button type="submit" className="btn btn-danger mt-2 mb-2" onClick={() => history.push("/login")}>Login</button>
                </div>
            </form>

        </div>

    );
}
export default Register