import { combineReducers } from 'redux';

import customers from './customers';
import products from './products';

export default combineReducers({
  customers,
  products
});
