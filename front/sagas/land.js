import {
    ADD_LAND_FAILURE, ADD_LAND_REQUEST, ADD_LAND_SUCCESS,
    UPLOAD_IMAGE_FAILURE,
    UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS
} from '@/reducer/land';
import axios from 'axios';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';

function addLandAPI(data) {
    return axios.post('/land', data);
}

function* addLand(action) {
    // const result = yield call(addLandAPI, action.data);
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

function uploadImageAPI(data) {
    return axios.post('/land/upload/image', data);
}

function* uploadImage(action) {
    const result = yield call(uploadImageAPI, action.data);
    try {
        // yield delay(1000);
        yield put({
            type: UPLOAD_IMAGE_SUCCESS,
            data: result.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGE_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchAddLand() {
    yield takeLatest(ADD_LAND_REQUEST, addLand);
}

function* watchUploadImage() {
    yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImage);
}

function* landReducer() {
    yield all([
        fork(watchAddLand),
        fork(watchUploadImage),
    ])
}

export default landReducer;