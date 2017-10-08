import { call, put, takeEvery } from 'redux-saga/effects';
import { get, remove, create, edit } from '../api';
import {
  REQUEST_CUSTOMERS,
  REMOVE_CUSTOMERS,
  CREATE_CUSTOMERS,
  EDIT_CUSTOMERS,
  receiveCustomers
} from '../actions/CustomersAction';

import {
  REQUEST_PRODUCTS,
  REMOVE_PRODUCTS,
  CREATE_PRODUCTS,
  EDIT_PRODUCTS,
  receiveProducts
} from '../actions/ProductsAction';
const urlCustomers = 'http://localhost:8000/api/customers/';
const urlProducts = 'http://localhost:8000/api/products/';

function* getCustomers() {
  const customers = yield call(get, urlCustomers);
  yield put(receiveCustomers(customers));
}

function* removeCustomers(action) {
  const removeById = yield call(remove, urlCustomers, action.id);
  if (removeById) yield call(getCustomers);
}

function* createCustomers(action) {
  const created = yield call(create, urlCustomers, action.create);
  if (created) yield call(getCustomers);
}

function* editCustomers(action) {
  const edited = yield call(edit, urlCustomers, action.id, action.edit);
  if (edited) yield call(getCustomers);
}

function* getProducts() {
  const products = yield call(get, urlProducts);
  yield put(receiveProducts(products));
}
function* removeProducts(action) {
  const removeById = yield call(remove, urlProducts, action.id);
  if (removeById) yield call(getProducts);
}

function* createProducts(action) {
  const created = yield call(create, urlProducts, action.create);
  if (created) yield call(getProducts);
}

function* editProducts(action) {
  const edited = yield call(edit, urlProducts, action.id, action.edit);
  if (edited) yield call(getProducts);
}
export default function* Saga() {
  yield takeEvery(REQUEST_CUSTOMERS, getCustomers);
  yield takeEvery(REMOVE_CUSTOMERS, removeCustomers);
  yield takeEvery(CREATE_CUSTOMERS, createCustomers);
  yield takeEvery(EDIT_CUSTOMERS, editCustomers);
  yield takeEvery(REQUEST_PRODUCTS, getProducts);
  yield takeEvery(REMOVE_PRODUCTS, removeProducts);
  yield takeEvery(CREATE_PRODUCTS, createProducts);
  yield takeEvery(EDIT_PRODUCTS, editProducts);
}
