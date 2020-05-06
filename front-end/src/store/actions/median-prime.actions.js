export const LOAD_MEDIAN_VALUES = 'LOAD_MEDIAN_VALUES';
export const LOAD_MEDIAN_VALUES_SUCCESS = 'LOAD_MEDIAN_VALUES_SUCCESS';
export const LOAD_MEDIAN_VALUES_FAIL = 'LOAD_MEDIAN_VALUES_FAIL';

export const loadMedianValues = max => ({
    type: LOAD_MEDIAN_VALUES,
    payload: max
});

export const loadMedianValuesSuccess = medianValues => ({
    type: LOAD_MEDIAN_VALUES_SUCCESS,
    payload: medianValues
});

export const loadMedianValuesFail = () => ({
    type: LOAD_MEDIAN_VALUES_FAIL
});


