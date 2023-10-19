import { all, fork } from 'redux-saga/effects';
import user from './user';
import contact from './contact';
import request from './request';
import land from './land';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3065';
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