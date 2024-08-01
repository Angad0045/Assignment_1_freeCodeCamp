import React, { useEffect, useRef, useState } from "react";
import { checkValidation } from "../Utilise/Validation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Utilise/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuth } from "../Context/AuthContext";

const Sign_Up = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const passsword = useRef(null);

  const handleValidation = () => {
    const validate = checkValidation(
      email.current.value,
      passsword.current.value
    );
    setErrorMsg(validate);
  };

  const Navigate = useNavigate();

  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      toast.success("User Logged in Sucessfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      Navigate("/pagetwo");
    }
  }, [user]);

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#0A0A23] p-12 w-1/4 mt-40 mx-auto right-0"
      >
        <p className="text-center text-white text-3xl font-extrabold mb-5">
          {isSignIn ? "Login In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-2 w-full bg-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-2 w-full bg-white"
        />
        <input
          ref={passsword}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-white"
        />
        <p className="text-red-600">{errorMsg}</p>
        <button
          className="p-2 my-2 w-full font-bold bg-gradient-to-b from-yellow-300 to-yellow-400 border-2 border-yellow-500 hover:from-yellow-400 hover:to-yellow-500"
          onClick={handleValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn ? (
          <p className="my-2 text-neutral-400">
            New to freeCodeCamp?
            <span
              className="mx-1 font-bold text-white cursor-pointer hover:underline underline-offset-2"
              onClick={toggleSignIn}
            >
              Sign Up Now.
            </span>
          </p>
        ) : (
          <p className="my-2 text-neutral-400">
            Already Registered?
            <span
              className="mx-1 font-bold text-white cursor-pointer hover:underline underline-offset-2"
              onClick={toggleSignIn}
            >
              Sign In Now.
            </span>
          </p>
        )}
        <p className="text-xs text-center font-semibold text-neutral-400">
          Or Continue with
        </p>
        <button
          className="p-2 my-2 w-full font-bold text-white bg-[#0A0A23] border-2 border-white hover:bg-white hover:text-[#0A0A23]"
          onClick={handleGoogleSignIn}
        >
          {isSignIn ? "Sign In With Google" : "Sign Up With Google"}
        </button>
      </form>
    </>
  );
};

export default Sign_Up;
