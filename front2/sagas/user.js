import { dummyUser,
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAILURE,
} from '@/reducer/user';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function joinAPI(data){
    return axios.post('/user/join', data);
}

function* join(action) {
    yield call(joinAPI, action.data);
    // yield delay(1000);
    try {
        yield put({
            type:JOIN_SUCCESS,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type:JOIN_FAILURE,
            error:err.response.data,
        })
    }
}

function logoutAPI(){
    return axios.post('/user/logout');
}

function* logout(action) {
    yield call(logoutAPI, action.data);
    // yield delay(1000);
    try {
        yield put({
            type:LOG_OUT_SUCCESS,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type:LOG_OUT_FAILURE,
            error:err.response.data,
        })
    }
}

function loginAPI(data){
    return axios.post('/user/login', data);
}

function* login(action) {
    yield call(loginAPI, action.data);
    // yield delay(1000);
    try {
        yield put({
            type:LOG_IN_SUCCESS,
            data: action.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type:LOG_IN_FAILURE,
            error:err.response.data,
        })
    }
}

function* watchJoin() {
    yield takeLatest(JOIN_REQUEST, join);
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

function * userSaga() {
    yield all([
        fork(watchJoin),
        fork(watchLogout),
        fork(watchLogin)
    ]);
}

export default userSaga;