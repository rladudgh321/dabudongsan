import { ADD_LAND_FAILURE, ADD_LAND_REQUEST, ADD_LAND_SUCCESS } from '@/reducer/land';
import axios from 'axios';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';

function addLandAPI(data) {
    return axios.post('/land', data);
}

function* addLand(action) {
    // yield call(addLandAPI, action.data);
    try {
        yield delay(1000);
        yield put({
            type: ADD_LAND_SUCCESS,
            data: action.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_LAND_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchAddLand() {
    yield takeLatest(ADD_LAND_REQUEST, addLand);
}

function* landReducer() {
    yield all([
        fork(watchAddLand),
    ])
}

export default landReducer;