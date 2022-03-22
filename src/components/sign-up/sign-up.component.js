import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import { Component, useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../firebase/firebase-utils";
import CustomButton from "../custom-button/custom-button.component";
import { async } from "@firebase/util";

export class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(error.code);
      } else {
        console.error(error);
      }
    }

    // const val = createAuthUserWithEmailandPassword();
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    // console.log(this.state);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up-container ">
        <h2>Don't you have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            required
            label="displayName"
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            label="email"
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            label="password"
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            label="confirmPassword"
            handleChange={this.handleChange}
          ></FormInput>
          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
