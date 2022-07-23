import React, { lazy, Suspense, useState } from 'react';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';

const marketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co-'
})

export default () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  return <>
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={marketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>

    </BrowserRouter>
  </>

};
