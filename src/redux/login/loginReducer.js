

import { ADD_ITEM, DELETE_ITEM } from '../constants/index.js'

const initialState = {
    numOfItems: 0,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            };

        case DELETE_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            };
        default:
            return state;
    }
};
export default loginReducer;