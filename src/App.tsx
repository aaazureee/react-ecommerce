import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import AuthPage from './pages/authpage/authpage.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { authListener } from './store/user/thunks';
import Checkout from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection-page/collection-page.component';

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
        <Route exact path="/shop" component={ShopPage} />
        <Route path={`/shop/:category`} component={CollectionPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/sign-in" component={AuthPage} />
        <Route
          path="/404"
          component={() => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                marginTop: 250,
              }}
            >
              404 Not Found
            </div>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default connect()(App);
