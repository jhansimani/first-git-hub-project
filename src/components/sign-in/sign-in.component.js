import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import {
  signInWithGoogle,
  signInAuthUserWithEmailandPassword,
} from "../firebase/firebase-utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
class SignIn extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      setCurrentUser: this.setCurrentUser
    };
  }
setCurrentUser = () => {
  this.setState( )
}

  handleSubmit = async (event) => {
    const { email, password } = this.state;
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailandPassword(
        email,
        password
      );
      console.log(user);
      // setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("auth/wrong-password ");
          break;
        case "auth/user-not-found":
          alert("user-not-found");
          break;
      }
      console.log(error);
    }

    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  signIn = () => {
    console.log("signIn");

    // const logGoogleUser = async () => {
    //   const response = await signInWithGooglePop();
    //   console.log(response);
    // };
  };
  render() {
    const { email, password } = this.state;
    const context = UserContext;
    const { setCurrentUser } = context;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            label="email"
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            required
            handleChange={this.handleChange}
          />

          <div className="button-wrapper">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" buttonType="google">
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
