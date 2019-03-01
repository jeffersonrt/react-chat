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
      id: message.id,
      date: message.date,
      userId: message.userId,
      username: message.username,
      text: message.text
    }
  });
};

// ACTIONS NOTIFICATIONS
export const notificationAdd = () => async dispatch => {
  dispatch({
    type: 'notification/ADD'
  });
};

export const notificationReset = () => async dispatch => {
  dispatch({
    type: 'notification/RESET'
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
