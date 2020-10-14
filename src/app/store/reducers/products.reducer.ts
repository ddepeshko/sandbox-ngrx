import {initialState} from "../app.state";
import {EState_Actions, PRODUCT_ACTIONS, ProductActions} from "../actions/products.action";

export function productsReducer(state = initialState, action: ProductActions) {
  switch (action.type) {
    case PRODUCT_ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        productsList: [...state.productsList, action.payload]
      }
    case PRODUCT_ACTIONS.DELETE_PRODUCT:
      let newList = state.productsList.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        productsList: newList
      }
    case PRODUCT_ACTIONS.UPDATE_PRODUCT:
      let newArray = state.productsList.map(el => {
        if (el.id === action.payload.id) {
          el = action.payload;
        }
        return el;
      });
      return {
        ...state,
        productsList: newArray
      }
    case PRODUCT_ACTIONS.LOAD_PRODUCT_LIST:
      return {
        ...state,
        productsList: action.payload
      }
    case EState_Actions.SET_STATE:
      return {
        ...state,
        ...action.payload
      }
    case PRODUCT_ACTIONS.LOAD_PRODUCT_DATA:
      return {
        ...state,
        currentProduct: action.payload
      }
    default:
      return state;
  }
}
