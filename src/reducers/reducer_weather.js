import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; // don't manipulate state by doing something like state.push. This instead creates a new, flattened array
    }
    return state;
}