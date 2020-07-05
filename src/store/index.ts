import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const middlewares = applyMiddleware(thunk, logger);

  const store = createStore(rootReducer, middlewares);

  return store;
};
