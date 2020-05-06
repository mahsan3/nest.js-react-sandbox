import React from 'react';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MaxValueForm from "./MaxValueForm";

describe("MaxValueForm", () => {
    let container = null;

    it('should emit the same value input', () => {

        const onSubmit = jest.fn();
        const expectedInput = "10";

        const { getByText, container, debug } = render(<MaxValueForm handleSubmit={onSubmit} />);

        const input = container.querySelector("#exampleFormControlInput1");
        userEvent.type(input, expectedInput);

        const submitBtn = getByText(/Get Median Values/i);

        userEvent.click(submitBtn);

        expect(onSubmit).toHaveBeenCalledWith(expectedInput);

    });

});
