/* eslint-disable import/no-anonymous-default-export */
import { ADD_SKILL, DELETE_SKILL } from "../actions/type";

export default function (action, getState) {
  switch (action.type) {
    case ADD_SKILL:
      return {
        ...getState().auth.user,
        skillSet: action.payload,
      };
    default:
      return {
        ...getState().auth.userstate,
      };
  }
}
