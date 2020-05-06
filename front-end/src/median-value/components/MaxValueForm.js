import React, {useState} from 'react';

const MaxValueForm = (props) => {
    const [maxPrime, setMaxPrime] = useState('');

    const handleSubmit = (e) => {
        console.log(`MaxValueForm: ${maxPrime}`);
        e.preventDefault();
        props.handleSubmit(maxPrime);
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Enter maximum prime number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"
                       placeholder="Enter number"
                       value={maxPrime}
                       onChange={e => setMaxPrime(e.target.value)}
                />
            </div>

            <button type="button" className="btn btn-info float-right"
                    type="submit" id="median-submit">Get Median Values</button>
        </form>
    );
};

export default MaxValueForm;
