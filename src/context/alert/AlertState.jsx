import React, { useReducer } from 'react';
import alertContext from '../../context/alert/alertContext';

import AlertReducer from '../../context/alert/alertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const istate = { alert: false };
  const [state, dispatch] = useReducer(AlertReducer, istate);

  //   Set Alert
  const setAlert = () => {
    dispatch({
      type: SET_ALERT,
      payload: true,
    });
  };
  const clearAlert = () => {
    dispatch({
      type: REMOVE_ALERT,
    });
  };

  return (
    <alertContext.Provider value={{ alert: state.alert, setAlert, clearAlert }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
