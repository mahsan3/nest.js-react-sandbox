import {ofType} from "redux-observable";
import {LOAD_MEDIAN_VALUES, loadMedianValuesFail, loadMedianValuesSuccess} from "../actions/median-prime.actions";
import {map, mergeMap,catchError} from "rxjs/operators";
import { ajax } from 'rxjs/ajax';
import {of} from "rxjs";

export const loadMedianValues = (action$, state$) => action$.pipe(
    ofType(LOAD_MEDIAN_VALUES),
    mergeMap(action => ajax({
            url: `/prime-median/${action.payload}`,
            method: 'GET'
        }).pipe(
            map(response => {
                return loadMedianValuesSuccess(response.response);
            }),
            catchError(err => {
                return of(loadMedianValuesFail());
            })
        )
    )
);
