import { produce } from "immer";

const initialState = {
    me: null,
    loginLoading:false,
    loginDone:false,
    loginError:null,
    logoutLoading:false,
    logoutDone:false,
    logoutError:null,
    joinLoading:false,
    joinDone:false,
    joinError:null,
}

export const dummyUser = (data) => ({
    ...data,
    ids: '111',
    password: '111',
});

export const JOIN_REQUEST = 'JOIN_REQUEST';
export const JOIN_SUCCESS = 'JOIN_SUCCESS';
export const JOIN_FAILURE = 'JOIN_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const userReducer = (state=initialState,action) => produce(state, (draft=> {
    switch(action.type){
        case JOIN_REQUEST :
            draft.joinLoading = true;
            draft.joinDone = false;
            draft.joinError = null;
            break;
        case JOIN_SUCCESS :
            draft.joinLoading = false;
            draft.joinDone = true;
            break;
        case JOIN_FAILURE :
            draft.joinLoading = false;
            draft.joinError = action.error;
            break;
        case LOG_OUT_REQUEST :
            draft.logoutLoading = true;
            draft.logoutDone = false;
            draft.logoutError = null;
            break;
        case LOG_OUT_SUCCESS :
            draft.logoutLoading = false;
            draft.logoutDone = true;
            draft.me = null;
            break;
        case LOG_OUT_FAILURE :
            draft.logoutLoading = false;
            draft.logoutError = action.error;
            break;
        case LOG_IN_REQUEST :
            draft.loginLoading = true;
            draft.loginDone = false;
            draft.loginError = null;
            break;
        case LOG_IN_SUCCESS :
            draft.loginLoading = false;
            draft.loginDone = true;
            draft.me = dummyUser(action.data);
            break;
        case LOG_IN_FAILURE :
            draft.loginLoading = false;
            draft.loginError = action.error;
            break;
        default :
            break;
    }
}));

export default userReducer;