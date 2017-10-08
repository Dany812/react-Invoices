export const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS';
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';
export const CREATE_CUSTOMERS = 'CREATE_CUSTOMERS';
export const EDIT_CUSTOMERS = 'EDIT_CUSTOMERS';
export const CUSTOMERS_BY_ID = 'CUSTOMERS_BY_ID';
export const NAME_CHANGE = 'NAME_CHANGE';
export const ADDRESS_CHANGE = 'ADDRESS_CHANGE';
export const PHONE_CHANGE = 'PHONE_CHANGE';
export const REMOVE_STATE = 'REMOVE_STATE';

export const requestCustomers = () => ({ type: REQUEST_CUSTOMERS });

export const receiveCustomers = customers => ({ type: RECEIVE_CUSTOMERS, customers });

export const removeCustomers = id => ({ type: REMOVE_CUSTOMERS, id });

export const createCustomers = create => ({ type: CREATE_CUSTOMERS, create });

export const editCustomers = (id, edit) => ({ type: EDIT_CUSTOMERS, id, edit });

export const customersById = customer => ({ type: CUSTOMERS_BY_ID, customer });

export const nameChange = name => ({ type: NAME_CHANGE, name });

export const addressChange = address => ({ type: ADDRESS_CHANGE, address });

export const phoneChange = phone => ({ type: PHONE_CHANGE, phone });

export const removeState = () => ({ type: REMOVE_STATE });
