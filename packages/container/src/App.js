import React from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


const generateClassName = createGenerateClassName({
  productionPrefix: 'co-'
})

export default () => {
  return <>
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
          <MarketingApp />
        </div>
      </StylesProvider>

    </BrowserRouter>
  </>

};
