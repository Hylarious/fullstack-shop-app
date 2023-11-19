export const getCartProducts = ({cart}) => cart.productsId

// action name creator
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;


const ADD_ITEM_TO_CART = createActionName('ADD_ITEM_TO_CART')
const DELETE_ITEM_FORM_CART = createActionName('DELETE_ITEM_FORM_CART')
const ADD_ORDER = createActionName('ADD_ORDER')


export const addItemToCart = payload => ({payload, type: ADD_ITEM_TO_CART})

/* THUNKS */

/* INITIAL STATE */

const initialState = { orderData: {}, productsId: [] }
;

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM_TO_CART: 
    return {
      ...statePart,
      productsId: [...statePart.productsId, action.payload]
    }
    default:
      return statePart;
  }
}
