import React from 'react'
import { createStore } from 'redux'
import { renderRedux } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import MedianValueContainer from "./MedianValueContainer";

describe("MedianValueContainer", () => {

    it('should display the initial value of primeMax', () => {
        const { getByTestId } = renderRedux(<MedianValueContainer />, {
            initialState: {
                primeMedianReducer: {
                    primeMax: 100,
                    medianValues: [],
                    error: false
                }
            }
        });
        expect(getByTestId("list-label")).toHaveTextContent("Median Value(s) for 100 are");
    });

    it('should display an error', () => {
        const { getByTestId } = renderRedux(<MedianValueContainer />, {
            initialState: {
                primeMedianReducer: {
                    primeMax: -1,
                    medianValues: [],
                    error: true
                }
            }
        });
        expect(getByTestId("error-message")).toHaveTextContent("There was an error calculating the median values for -1");
    });

    it('should have two items for median list', () => {
        const { getByTestId } = renderRedux(<MedianValueContainer />, {
            initialState: {
                primeMedianReducer: {
                    primeMax: 10,
                    medianValues: [3,5],
                    error: false
                }
            }
        });
        expect(getByTestId("0")).toHaveTextContent("3");
        expect(getByTestId("1")).toHaveTextContent("5");
    });

});
