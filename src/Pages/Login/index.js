import React from "react";
import { useHistory } from "react-router-dom";

import Api from "../../Lib/auth";
import "./style.scss";

import Apple from "../../Assets/Images/icons/apple.svg";
import GitHub from "../../Assets/Images/icons/github.svg";
import Twitter from "../../Assets/Images/icons/twitter.svg";

const LoginPage = (props) => {  

  let history = useHistory();
  const {handlerUserLogged,handlerIsLogged} = props;

  const loginHandler = async event => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const user = await Api.login({email,password});
    if(user.success === true){
        alert("se inicio sesion");
        handlerUserLogged(user.data);
        handlerIsLogged(true);
        localStorage.setItem("userData",JSON.stringify(user.data));
        history.push("/");
    }else{
        alert("error al iniciar sesion");
    }
}
  return (
    <main className="main-login">
      <div class="login-container">
        <h1>Welcome to DEV Community</h1>
        <p>
          <a href="/">DEV Community</a> is a community of 696,390 amazing
          developers
        </p>
        <div className="btn-container">
          <button name="button" type="button" className="btn-apple">
            <img src={Apple} alt="" />
            Continue with Apple
          </button>
          <button name="button" type="button" className="btn-github">
            <img src={GitHub} alt="" />
            Continue with GitHub
          </button>
          <button name="button" type="button" className="btn-twitter">
            <img src={Twitter} alt="" />
            Continue with Twitter
          </button>
        </div>
        <div className="w-100">
          <div className="mt-3 d-flex justify-content-center">
            <span>Have a password? Continue with your email address</span>
          </div>
          <form className="mt-4" onSubmit={loginHandler}>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" name="email"></input>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
              ></input>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              ></input>
              <label class="form-check-label" for="defaultCheck1">
                Remember me
              </label>
            </div>
            <button type="submit" class="btn-continue">
              Continue
            </button>
          </form>
        </div>
        <p className="forgot">
          <a href="#">I forgot my password</a>
        </p>
      </div>
      <div className="my-4 d-flex justify-content-center">
        <span>
          Open Source · Free Forever We strive for transparency and don't
          collect excess data.
        </span>
      </div>
    </main>
  );
};


export default LoginPage;
