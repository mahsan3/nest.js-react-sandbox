import {
    LOAD_MEDIAN_VALUES,
    LOAD_MEDIAN_VALUES_FAIL,
    LOAD_MEDIAN_VALUES_SUCCESS
} from "../actions/median-prime.actions";

export const initialState = {
    primeMax: null,
    medianValues: [],
    error: false
};

export function primeMedianReducer(state = initialState, action) {

    switch(action.type) {

        case LOAD_MEDIAN_VALUES:
            return {
                ...state,
                primeMax: action.payload
            }

        case LOAD_MEDIAN_VALUES_SUCCESS:
            return {
                ...state,
                medianValues: action.payload,
                error: false
            };
        case LOAD_MEDIAN_VALUES_FAIL:
            return {
                ...state,
                medianValues: [],
                error: true
            }
        default:
            return state;

    }

}
