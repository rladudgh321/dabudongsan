import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import location from './location';
import { HYDRATE } from 'next-redux-wrapper';

const rootReducer = combineReducers({
    index:(state={},action) =>{
        switch(action.type){
            case HYDRATE :
                console.log('HYDREATE', action);
                return {...state, ...action.payload}
            default :
                return state;
        }
    },
    user,
    post,
    location,
});

export default rootReducer;