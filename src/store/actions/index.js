export const addMessage = message => async dispatch => {
  const date = new Date();
  dispatch({
    type: 'message/ADD',
    payload: {
      id: `${message.userId}${date.getTime()}`,
      date,
      userId: message.userId,
      username: message.username,
      text: message.text
    }
  });
};

export const messageReceived = message => async dispatch => {
  dispatch({
    type: 'message/RECEIVED',
    payload: {
      userId: message.userId,
      username: message.username,
      text: message.text
    }
  });
};

export const messageNotification = message => async dispatch => {
  dispatch({
    type: 'message/NOTIFICATION',
    payload: [...message]
  });
};

// ACTIONS SETTINGS
export const settingsUpdate = settings => dispatch => {
  dispatch({
    type: 'settings/UPDATE',
    payload: settings
  });
};
export const settingsReset = () => dispatch => {
  dispatch({
    type: 'settings/RESET'
  });
};
