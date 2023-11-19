import axios from 'axios';
import { API_URL } from '../config';
 
export const getOrder = ({cart}) => cart
export const getCartProducts = ({ cart }) => cart.productIds;

// action name creator
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

const ADD_ITEM_TO_CART = createActionName('ADD_ITEM_TO_CART');
const DELETE_ITEMS_FORM_CART = createActionName('DELETE_ITEMS_FORM_CART');
const PRODUCT_COUNT_DOWN = createActionName('PRODUCT_COUNT_DOWN');
const ADD_ORDER_DATA = createActionName('ADD_ORDER_DATA');

export const addItemToCart = (payload) => ({ payload, type: ADD_ITEM_TO_CART });
export const deleteItemsFormCart = (payload) => ({
  payload,
  type: DELETE_ITEMS_FORM_CART,
});
export const productCountDown = (payload) => ({
  payload,
  type: PRODUCT_COUNT_DOWN,
});
export const addOrderData = payload => ({payload, type: ADD_ORDER_DATA})
/* THUNKS */

export const addOrderRequest = (cart)  => {
  return async () => {
    try {
      console.log(cart)
      let res = await axios.post(`${API_URL}/orders`, cart);
    } catch (e) {
      console.log(e.message);
    }
  };
};

/* INITIAL STATE */

console.log(localStorage);
const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = { orderData: {}, productIds: cartItems };

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const addItemNewState = {
        ...statePart,
        productIds: [...statePart.productIds, action.payload],
      };

      localStorage.setItem('cartItems', JSON.stringify(addItemNewState.productIds));
      return addItemNewState;
    case DELETE_ITEMS_FORM_CART:
      const deleteNewState = {
        ...statePart,
        productIds: statePart.productIds.filter((id) => id !== action.payload),
      };
      localStorage.setItem('cartItems', JSON.stringify(deleteNewState.productIds));
      return deleteNewState;
    case PRODUCT_COUNT_DOWN:
      const index = statePart.productIds.indexOf(action.payload);
      const countNewState = {
        ...statePart,
        productIds: [
          ...statePart.productIds.slice(0, index),
          ...statePart.productIds.slice(index + 1),
        ],
      };
      localStorage.setItem('cartItems', JSON.stringify(countNewState.productIds))
      if (index !== -1) {
        return countNewState;
      }
      return statePart;
    case ADD_ORDER_DATA: 
    return {
      ...statePart,
      orderData: {...action.payload}
    }   
    default:
      return statePart;
  }
}
