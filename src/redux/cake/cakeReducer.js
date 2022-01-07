import {BUY_CAKE} from "./cakeTypes";

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer