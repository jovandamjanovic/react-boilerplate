import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/counter';

const initialState = {
    counterValue: 10
}

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return Object.assign({}, state, {counterValue: state.counterValue + 1})
        case COUNTER_DECREMENT:
            return Object.assign({}, state, {counterValue: state.counterValue - 1})
        default:
            return state
    }
};