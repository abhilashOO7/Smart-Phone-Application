import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import '../App.css';

//  -----    BackEnd Section of Login Runs Here      ------

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
            alert('Welcome Back '+ (user.email));
        })
    }
    

//  -----    FrontEnd (UI) Section of Login Runs Here      ------


    return (
        <div className="login" id="login_page">

            <div className="container mt-0 mb-0 ms-2 me-2 text-center" id="cards">

                <h5 className="mt-4 mb-2"><b>Login to see various smartphones at Abhilash's store</b></h5>

                <div className="mb-5 mt-5">
                    <label for="Email Address" className="form-label"><b>Enter Your Email Address</b></label>
                    <input type="text" className="form-control text-center" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>

                </div>

                <label for="password" className="form-label"><b>Enter Your Password</b></label>
                <input type="password" name="password" className="form-control text-center" value={user.password} onChange={handleChange} placeholder="Enter your Password" aria-labelledby="passwordHelpBlock" ></input>

                <div id="passwordHelpBlock" className="form-text">
                    <i>The password must be 8-20 characters long and must contain a combination of letters, special characters and numbers.</i>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-outline-danger mt-5 mb-3 text-black" onClick={login} id="signin"><b>Sign in</b></button>
                </div>


                <div>or</div>

                <div className="text-center">
                    <button type="button" className="btn btn-outline-danger mt-3 mb-4 text-black" onClick={() => history.push("/register")} id="signin"><b>Register</b></button>
                </div>

            </div>

        </div>
    );
}
export default Login