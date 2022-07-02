import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { userLoginRequest } from "../reducer/action.js";

function Login() {
  const [state, setState] = React.useState({
    password: "",
    username: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.reducer);
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  if (isAuth) {
    navigate("/");
  }
  function handleSumbit(e) {
    e.preventDefault();

    dispatch(userLoginRequest(state));
    // redirectPage()
    if (isAuth) {
      navigate("/");
      alert("Login successful");
    }
  }
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={(e) => handleSumbit(e)} style={{ margin: "30px 0px" }}>
        <br />
        <br />
        <span>Username :</span>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <span>Password :</span>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
