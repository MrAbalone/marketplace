import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import {toast} from 'react-toastify'
import {ToastContainer} from 'react-toastify'
import OAuth from "../components/OAuth";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, //why do we need prev state  ? ? ?
      [e.target.id]: e.target.value,
    }));
    // console.log(e.target.id)
  };

  const onSubmit = async (e) => {
    // console.log("CLICK ONSUBMIT")
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      // console.log(user)
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;  //we do not want password to be copied over
      formDataCopy.timestamp = serverTimestamp(); //sending timestamp from server

      await setDoc(doc(db, "users", user.uid), formDataCopy); //update db to users collection

      navigate("/");
    } catch (error) {
      toast.error("Somethinf went wrong with registration")
      console.log(error);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="nameInput"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            ></input>

            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            ></input>

            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              ></input>

              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signInBar">
              <p className="signInText">Sign Up</p>
              <button className="signUpButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          <OAuth/>
          <Link to="/sign-in" className="registerLink">
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  );
}

export default SignUp;
