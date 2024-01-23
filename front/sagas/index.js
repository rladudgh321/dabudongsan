import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import contact from './contact';
import land from './land';
import request from './request';
import user from './user';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials= true;

function* rootSaga() {
    yield all([
        fork(land),
        fork(request),
        fork(contact),
        fork(user),
    ]);
}

export default rootSaga;