import React, { useState } from "react";

import axios from "axios";
import {  ToastContainer,toast } from "react-toastify";
import Button from "@mui/material/Button";

export default function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    contact: "",
  });
  const { email, password, username, contact } = inputValue;
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });
  const handleSubmit = async (e) => {
    console.log("button clicked")
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signUP",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 500);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="auth-container">
        <h3>Create Your Account</h3>
        <p>Join Our Trading Platform</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter Your Fullname"
            onChange={handleOnchange}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleOnchange}
            required
          />
          <input
            type="number"
            name="contact"
            value={contact}
            placeholder="Enter Your Phone Number"
            onChange={handleOnchange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={handleOnchange}
            required
          />
          <Button type="submit" variant="contained" className="auth-btn">
            SignUp
          </Button>
        </form>
         <ToastContainer />
      </div>
    </>
  );
}
