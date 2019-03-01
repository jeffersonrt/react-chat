const userId = Math.floor(Math.random() * (1000 - 0)) + 0;
const initialState = {
  userId,
  username: `guest${userId}`,
  theme: 'light',
  timeFormat: '12',
  ctrlEnter: 'on',
  language: 'en-US'
};

export default function userSettings(state = initialState, action) {
  switch (action.type) {
    case 'settings/UPDATE':
      return {
        ...state,
        ...action.payload
      };
    case 'settings/RESET':
      return {
        ...initialState
      };

    default:
      return state;
  }
}
