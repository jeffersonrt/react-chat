import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import messagesReducer from './messagesReducer';
import settingsReducer from './settingsReducer';
import notificationsReducer from './notificationsReducer';

export default combineReducers({
  settings: settingsReducer,
  messages: messagesReducer,
  notification: notificationsReducer,
  form: formReducer
});
