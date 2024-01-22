//shopping cart


export const initialState = {
    cart: [],
};

const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const reducer = (state, action) => {

    switch (action.type) {

        case CART_ACTIONS.ADD_TO_CART:
        //logic to add an item to the cart

        case CART_ACTIONS.REMOVE_FROM_CART:
        //logic to remove an item from the cart

        default:
            return state;
    }
}

export default reducer;


//useReducer will return state
//returned state and dispatch u provide through react context api