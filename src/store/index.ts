import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducer';
import { cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const middlewares = applyMiddleware(thunk, logger);

  const store = createStore(rootReducer, middlewares);

  return store;
};
