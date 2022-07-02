import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FALIURE,
  USER_LOGOUT_SUCCESS,
} from "./actionTypes.js";

const initState = {
  isLoading: false,
  error: false,
  items: [],
  isAuth: false,
  token: "",
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case USER_LOGIN_FALIURE:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
        isAuth: true,
        isLoading: false,
        token: action.payload.token,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        token: "",
        items: [],
      };

    default:
      return state;
  }
};
