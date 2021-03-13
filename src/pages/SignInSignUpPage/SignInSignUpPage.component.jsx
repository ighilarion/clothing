import React from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";
import "./SignInSignUpPage.style.scss";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
