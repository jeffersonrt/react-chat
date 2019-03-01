import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'UserSettings',
  storage,
  whitelist: ['settings']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(
  thunk,
  createLogger({
    collapsed: true
  })
);

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
