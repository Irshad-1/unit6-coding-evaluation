import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FALIURE,
  USER_LOGOUT_SUCCESS,
} from "./actionTypes.js";

import axios from "axios";

export const userLoginRequest = (data) => async (dispatch, getState) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });
  try {
    console.log("data =>", data);
    const payload = {
      url: `https://reqres.in/api/login`,
      method: "post",
      "Access-Control-Allow-Origin": "*",
      data: data,
    };

    const res = await axios(payload);
    console.log(res.data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FALIURE });
  }
};

export const userLogOut = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};
