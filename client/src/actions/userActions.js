import axios from "axios";
import { loadUser } from "./authActions";

export const addSkill = ({ skillSet }) => (dispatch, getState) => {
  // set headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
  };
  // get user property from auth state
  const user = getState().auth.user;

  axios
    .put(
      "/api/auth/update/set_skill",
      { skillSet },
      { params: { id: user._id } },
      config
    )
    .then((res) => {
      // load the user
      dispatch(loadUser());
    });
};

export const addSocial = ({ socialMedia }) => (dispatch, getState) => {
  // set headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
  };
  // get user property from auth state
  const user = getState().auth.user;

  axios
    .put(
      "/api/auth/update/set_social",
      { socialMedia },
      { params: { id: user._id } },
      config
    )
    .then((res) => {
      // load the user
      dispatch(loadUser());
    });
};
