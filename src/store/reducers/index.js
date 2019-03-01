import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import messagesReducer from './messagesReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  settings: settingsReducer,
  messages: messagesReducer,
  form: formReducer
});
