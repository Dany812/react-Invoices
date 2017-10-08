import {
  REMOVE_STATE,
  ADDRESS_CHANGE,
  PHONE_CHANGE,
  NAME_CHANGE,
  RECEIVE_CUSTOMERS,
  CUSTOMERS_BY_ID
} from '../actions/CustomersAction';
import { SHOW_MODALS, CALL_MODALS_REMOVE, CALL_MODALS_CREATE, CALL_MODALS_EDIT } from '../actions/ModalAction';
const initialState = {
  customers: {},
  showModal: false,
  callModalRemove: false,
  callModalCreate: false,
  callModalEdit: false,
  id: '',
  name: '',
  address: '',
  phone: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CUSTOMERS:
      return Object.assign({}, state, {
        customers: action.customers
      });
    case SHOW_MODALS:
      return Object.assign({}, state, {
        showModal: !state.showModal
      });
    case CALL_MODALS_REMOVE:
      return Object.assign({}, state, {
        callModalRemove: action.call
      });
    case CALL_MODALS_CREATE:
      return Object.assign({}, state, {
        callModalCreate: action.call
      });
    case CALL_MODALS_EDIT:
      return Object.assign({}, state, {
        callModalEdit: action.call
      });
    case CUSTOMERS_BY_ID:
      return Object.assign({}, state, {
        id: action.customer.id,
        name: action.customer.name,
        address: action.customer.address,
        phone: action.customer.phone
      });
    case NAME_CHANGE:
      return Object.assign({}, state, {
        name: action.name
      });
    case ADDRESS_CHANGE:
      return Object.assign({}, state, {
        address: action.address
      });
    case PHONE_CHANGE:
      return Object.assign({}, state, {
        phone: action.phone
      });
    case REMOVE_STATE:
      return Object.assign({}, state, {
        showModal: !state.showModal,
        callModalRemove: false,
        callModalCreate: false,
        callModalEdit: false,
        id: '',
        name: '',
        address: '',
        phone: ''
      });
    default:
      return state;
  }
};
