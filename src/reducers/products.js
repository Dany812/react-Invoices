import { REMOVE_STATE, PRICE_CHANGE, NAME_CHANGE, RECEIVE_PRODUCTS, PRODUCTS_BY_ID } from '../actions/ProductsAction';
import { SHOW_MODALS, CALL_MODALS_REMOVE, CALL_MODALS_CREATE, CALL_MODALS_EDIT } from '../actions/ModalAction';
const initialState = {
  products: {},
  showModal: false,
  callModalRemove: false,
  callModalCreate: false,
  callModalEdit: false,
  id: '',
  name: '',
  price: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        products: action.products
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
    case PRODUCTS_BY_ID:
      return Object.assign({}, state, {
        id: action.product.id,
        name: action.product.name,
        price: action.product.price
      });
    case NAME_CHANGE:
      return Object.assign({}, state, {
        name: action.name
      });
    case PRICE_CHANGE:
      return Object.assign({}, state, {
        price: action.price
      });
    case REMOVE_STATE:
      return Object.assign({}, state, {
        showModal: !state.showModal,
        callModalRemove: false,
        callModalCreate: false,
        callModalEdit: false,
        id: '',
        name: '',
        price: ''
      });
    default:
      return state;
  }
};
