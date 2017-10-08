export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';
export const CREATE_PRODUCTS = 'CREATE_PRODUCTS';
export const EDIT_PRODUCTS = 'EDIT_PRODUCTS';
export const PRODUCTS_BY_ID = 'PRODUCTS_BY_ID';
export const NAME_CHANGE = 'NAME_CHANGE';
export const PRICE_CHANGE = 'PRICE_CHANGE';
export const REMOVE_STATE = 'REMOVE_STATE';

export const requestProducts = () => ({ type: REQUEST_PRODUCTS });

export const receiveProducts = products => ({ type: RECEIVE_PRODUCTS, products });

export const removeProducts = id => ({ type: REMOVE_PRODUCTS, id });

export const createProducts = create => ({ type: CREATE_PRODUCTS, create });

export const editProducts = (id, edit) => ({ type: EDIT_PRODUCTS, id, edit });

export const productsById = product => ({ type: PRODUCTS_BY_ID, product });

export const nameChange = name => ({ type: NAME_CHANGE, name });

export const priceChange = price => ({ type: PRICE_CHANGE, price });

export const removeState = () => ({ type: REMOVE_STATE });
