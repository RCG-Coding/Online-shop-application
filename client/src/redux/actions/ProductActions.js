import { ActionTypes } from "../contants/action-types";
export const SetProducts = (products) =>{
    return {
        title: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const SelectedProducts = (products) =>{
    return {
        title: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}