import { GET_ERRORS, CLEAR_ERRORS } from "./type";

//RETURN ERROR
export const returnError = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

//CLEAR ERROR
export const clearError = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
