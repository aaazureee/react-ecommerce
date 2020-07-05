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
  let persistedState: any = localStorage.getItem('redux_store');
  if (persistedState) {
    persistedState = JSON.parse(persistedState);
  } else {
    persistedState = {};
  }

  const store = createStore(rootReducer, persistedState, middlewares);
  store.subscribe(() => {
    const { user, cart } = store.getState();
    const savedState = {
      user,
      cart: {
        ...cart,
        hidden: true,
      },
    };
    localStorage.setItem('redux_store', JSON.stringify(savedState));
  });

  return store;
};
