import { SEARCH } from '../actions/actionType';

export default ( state = '', action = {}) => {
    switch (action.type) {
        case SEARCH:
            return action.payload;
        default:
            return state;
    }
};