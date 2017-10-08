import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';

import Customers from './containers/Customers';
import Products from './containers/Products';
import Invoices from './containers/Invoices';

import NotFound from './components/NotFound';
import configureStore from './store/configureStore';

import 'react-select/dist/react-select.css';
import 'styles/index.css';
const store = configureStore();
const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Invoices} />
      <Route path="/invoices" component={Invoices} />
      <Route path="/customers" component={Customers} />
      <Route path="/products" component={Products} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app-root')
);
