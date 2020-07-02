import React, { useState, useEffect } from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/authpage/authpage.component';

import { auth, createUserProfile } from './firebase/firebase.utils';
import UserContext, { UserType } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState<UserType | null>(
    JSON.parse(localStorage.getItem('user') as string)
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      console.log('called');
      if (firebaseUser) {
        const userRef = await createUserProfile(firebaseUser);
        userRef?.onSnapshot((snapshot) => {
          const { email, createdAt, displayName } = snapshot.data() as any;
          const finalUser = {
            id: snapshot.id,
            email,
            createdAt,
            displayName,
          };
          setUser(finalUser);
          localStorage.setItem('user', JSON.stringify(finalUser));
        });
      } else {
        // signing out
        setUser(null);
        localStorage.removeItem('user');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={AuthPage} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
