import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import AuthPage from './pages/authpage/authpage.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { authListener } from './store/user/thunks';

interface AppProps {
  dispatch: any;
}

function App({ dispatch }: AppProps) {
  useEffect(() => {
    let unsubscribe = () => {};
    // listen to firebase auth changes
    dispatch(
      authListener((func) => {
        unsubscribe = func;
      })
    );
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default connect()(App);
