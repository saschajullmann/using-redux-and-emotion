import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './src/state/index.js';
import { hydrate } from 'emotion';

exports.replaceRouterComponent = () => {
  const store = configureStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
  return ConnectedRouterWrapper;
}

exports.onClientEntry = () => {
  if (
    typeof window !== `undefined` &&
    typeof window.__EMOTION_CRITICAL_CSS_IDS__ !== `undefined`
  ) {
    hydrate(window.__EMOTION_CRITICAL_CSS_IDS__)
  }
}
