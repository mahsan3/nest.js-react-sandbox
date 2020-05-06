import React from 'react';
import {connect} from "react-redux";
import MaxValueForm from "../components/MaxValueForm";
import {loadMedianValues} from "../../store/actions/median-prime.actions";

let MedianValueContainer = (props) => {

    const clickHandler = (max) => {
        console.log(`Container: ${max}`);
        props.getPrimeMedians(max);
    };

    return (
        <div className="row">
            <div className="col-12">
                <img src="banner.png" alt="" className="img-fluid"/>
            </div>
            <div className="col-12">
                <MaxValueForm handleSubmit={clickHandler}></MaxValueForm>
            </div>
            <div className="col-12">
                <hr/>
                {
                    props.error ?
                        <div className="alert alert-danger" role="alert" data-testid="error-message">
                            There was an error calculating the median values for {props.primeMax}
                        </div> :
                        <div>
                            <h5 data-testid="list-label">Median Value(s) for {props.primeMax} are</h5>
                            {props.medianValues.map((v,index) => <h6 key={index} data-testid={index}>{v}</h6>)}
                        </div>
                }
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        primeMax: state.primeMedianReducer.primeMax,
        medianValues: state.primeMedianReducer.medianValues,
        error: state.primeMedianReducer.error
    }
}

function mapDispatchToProps(dispatch) {

    return {
        getPrimeMedians: max => dispatch(loadMedianValues(max))
    };

}

MedianValueContainer = connect(mapStateToProps, mapDispatchToProps)(MedianValueContainer);
export default MedianValueContainer;
