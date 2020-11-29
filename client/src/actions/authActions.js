import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  AUTH_ERROR,
} from "./type";
import { returnError } from "./errorActions";

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//register user
export const register = ({ name, email, password }) => (dispatch) => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
  };

  const body = JSON.stringify({ name, email, password });

  axios
    .post("/api/users", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnError(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
      /* return Promise.reject(err); */
    });
};

// login
export const login = ({ email, password }) => (dispatch) => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth", body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnError(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// logout
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// setup config and headers
export const tokenConfig = (getState) => {
  //get token from localStorage
  const token = getState().auth.token;
  //add headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
  };
  // add token to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
