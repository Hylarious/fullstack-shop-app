import axios from 'axios';
import { API_URL } from '../config';
import { createSelector } from '@reduxjs/toolkit';

/* ACTIONS */

export const getAllProducts = ({ products }) => products.data;
export const getProductById = ({ products }, id) =>
  products.data.find((p) => p.id === id);
export const getProductsByIds = createSelector(
  [(state) => state.products.data, (state, ids) => ids],
  (products, ids) => products.filter((p) => ids.includes(p.id)),
);

export const getRequests = ({ products }) => products.requests;

// action name creator
const reducerName = 'products';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const LOAD_PRODUCT_BY_ID = createActionName('LOAD_PRODUCTS_BY_ID');

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const loadProductById = (payload) => ({
  payload,
  type: LOAD_PRODUCT_BY_ID,
});

/* THUNKS */

export const loadProductsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest({ name: 'LOAD_PRODUCTS' }));
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest({ name: 'LOAD_PRODUCTS' }));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_PRODUCTS', error: e.message }));
    }
  };
};

export const loadProductsByIdsRequest = (ids) => {
  return async (dispatch) => {
    for (let id of ids) {
      dispatch(startRequest({ name: `LOAD_PRODUCT_BY_ID ${id}` }));
      try {
        let res = await axios.get(`${API_URL}/products/${id}`);
        dispatch(loadProductById(res.data));
        dispatch(endRequest({ name: `LOAD_PRODUCT_BY_ID ${id}` }));
      } catch (e) {
        dispatch(
          errorRequest({ name: `LOAD_PRODUCT_BY_ID ${id}`, error: e.message }),
        );
      }
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  requests: {},
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: [...action.payload] };
    case LOAD_PRODUCT_BY_ID:
      const index = statePart.data.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (index !== -1) {
        // Product exists, update it
        return {
          ...statePart,
          data: [
            ...statePart.data.slice(0, index),
            action.payload,
            ...statePart.data.slice(index + 1),
          ],
        };
      } else {
        // Product doesn't exist, add it
        return {
          ...statePart,
          data: [...statePart.data, action.payload],
        };
      }
    case START_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: true, error: null, success: false },
        },
      };
    case END_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: false, error: null, success: true },
        },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            pending: false,
            error: action.payload.error,
            success: false,
          },
        },
      };
    default:
      return statePart;
  }
}
