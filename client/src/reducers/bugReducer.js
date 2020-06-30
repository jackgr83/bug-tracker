import { GET_BUGS } from '../actions/types';

const initState = {
    bugs: []
}

const bugReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_BUGS:
            return {
                ...state,
                bugs: action.payload,
            }

        default:
            return state;
        };
    
}
export default bugReducer;