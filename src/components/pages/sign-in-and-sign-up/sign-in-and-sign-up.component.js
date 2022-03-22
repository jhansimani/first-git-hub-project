import React, { useContext } from "react";
import SignIn from "../../sign-in/sign-in.component";
import SignUpForm from "../../sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";
import { UserContext } from "../../../contexts/user.context";
const SignInAndSignUpPage = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <div className="forms-wrapper">
      <SignIn />
      <SignUpForm />
    </div>
  );
};
export default SignInAndSignUpPage;
