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
  console.log('message', message);
  dispatch({
    type: 'message/RECEIVED',
    payload: {
      userId: message.userId,
      username: message.username,
      text: message.text
    }
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

// export const addUser = user => async dispatch => {
//   dispatch({
//     type: 'ADD_USER',
//     payload: user
//   });
// };
