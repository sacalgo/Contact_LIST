/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

import { SET_ALERT, REMOVE_ALERT }  from '../types';

const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set Alert
  const setAlert = (msg, type, timeout = 3000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    //here we can directly write 3000 without passing it in place of timeout
  };

  return (
    <AlertContext.Provider value={{
        setAlert,
        alerts:state
    }}>{props.children}</AlertContext.Provider>
  );
};

export default AlertState;
