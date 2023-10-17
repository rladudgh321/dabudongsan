import { all, fork } from 'redux-saga/effects';
import user from './user';
import contact from './contact';
import request from './request';
import land from './land';

function* rootSaga() {
    yield all([
        fork(land),
        fork(request),
        fork(contact),
        fork(user),
    ]);
}

export default rootSaga;