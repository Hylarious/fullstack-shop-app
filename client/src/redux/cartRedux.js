import axios from 'axios';
import { API_URL } from '../config';

export const getOrder = ({ cart }) => cart;
export const getCartProducts = ({ cart }) => cart.products;

// action name creator
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const ADD_ITEM_TO_CART = createActionName('ADD_ITEM_TO_CART');
const DELETE_ITEMS_FORM_CART = createActionName('DELETE_ITEMS_FORM_CART');
const PRODUCT_COUNT_DOWN = createActionName('PRODUCT_COUNT_DOWN');
const ADD_ORDER_DATA = createActionName('ADD_ORDER_DATA');
const ADD_ORDER_DESCRIPTION = createActionName('ADD_ORDER_DESCRIPTION');
const DELETE_ORDER_DESCRIPTION = createActionName('DELETE_ORDER_DESCRIPTION');
const DELETE_ITEMS = createActionName('DELETE_ITEMS')

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const addItemToCart = (payload) => ({ payload, type: ADD_ITEM_TO_CART });
export const deleteItemsFormCart = (payload) => ({
  payload,
  type: DELETE_ITEMS_FORM_CART,
});
export const productCountDown = (payload) => ({
  payload,
  type: PRODUCT_COUNT_DOWN,
});
export const addOrderData = (payload) => ({ payload, type: ADD_ORDER_DATA });
export const addOrderDescription = (payload) => ({
  payload,
  type: ADD_ORDER_DESCRIPTION,
});
export const deleteOrderDescription = (payload) => ({
  payload,
  type: DELETE_ORDER_DESCRIPTION,
});
export const deleteProducts = (payload) => ({ payload, type: DELETE_ITEMS})

/* THUNKS */

export const addOrderRequest = (order) => {

  return async (dispatch) => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/orders`, order);
      dispatch(deleteProducts())
      dispatch(endRequest());
      localStorage.clear();
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* INITIAL STATE */

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = {
  products: cartItems,
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const productExists = statePart.products.find(
        (product) => product.id === action.payload,
      );

      let updatedProducts;
      if (productExists) {
        updatedProducts = statePart.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      } else {
        updatedProducts = [
          ...statePart.products,
          { id: action.payload, quantity: 1 },
        ];
      }

      const addItemNewState = {
        ...statePart,
        products: updatedProducts,
      };

      localStorage.setItem(
        'cartItems',
        JSON.stringify(addItemNewState.products),
      );
      return addItemNewState;
    case DELETE_ITEMS_FORM_CART:
      const deleteNewState = {
        ...statePart,
        products: statePart.products.filter((p) => p.id !== action.payload),
      };
      localStorage.setItem(
        'cartItems',
        JSON.stringify(deleteNewState.products),
      );
      return deleteNewState;
    case PRODUCT_COUNT_DOWN:
      const product = statePart.products.find(
        (product) => product.id === action.payload,
      );
      let updatedProductsCountDown;

      if (product) {
        if (product.quantity > 1) {
          updatedProductsCountDown = statePart.products.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          );
        } else {
          updatedProductsCountDown = statePart.products.filter(
            (product) => product.id !== action.payload,
          );
        }

        const countNewState = {
          ...statePart,
          products: updatedProductsCountDown,
        };

        localStorage.setItem(
          'cartItems',
          JSON.stringify(countNewState.products),
        );
        return countNewState;
      }

      return statePart;
    case ADD_ORDER_DESCRIPTION:
      const addDesState = {
        ...statePart,
        products: statePart.products.map((p) =>
          p.id === action.payload.id
            ? { ...p, description: action.payload.description }
            : p,
        ),
      };
      localStorage.setItem('cartItems', JSON.stringify(addDesState.products));
      return addDesState;

    case DELETE_ORDER_DESCRIPTION:
      const deleteDesState = {
        ...statePart,
        products: statePart.products.map((p) =>
          p.id === action.payload ? (({ description, ...rest }) => rest)(p) : p,
        ),
      };
      localStorage.setItem(
        'cartItems',
        JSON.stringify(deleteDesState.products),
      );
      return deleteDesState;
    case ADD_ORDER_DATA:
      return {
        ...statePart,
        orderData: { ...action.payload },
      };
      case DELETE_ITEMS: 
        return {
          ...statePart, 
          products: []
        }
      
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false },
      };
    default:
      return statePart;
  }
}
