import { produce } from "immer";
import shortid from 'short-id';
const initialState = {
    addLandLoading:false,
    addLandDone:false,
    addLandError:null,
}

export const ADD_LAND_REQUEST='ADD_LAND_REQUEST';
export const ADD_LAND_SUCCESS='ADD_LAND_SUCCESS';
export const ADD_LAND_FAILURE='ADD_LAND_FAILURE';

/*
타이틀: 전세 2억 5천만 보증금 5천만
코멘트: 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!
주소: 대전 동구 가양동,
기타사항:화장실1, 주차1, 관리비10
랜드타입: 아파트/신축/원룸

*/ 
export const dummyLand = (data) => ({
    id:shortid.generate(),
    src:data.src, // src: 'waklfjklwfjeweawafeawefawefweaf'
    title:data.title,
    address:data.address,
    other:data.other,
    landType:data.landType, //아파트
    floor:data.floor, //층수
    room:data.room, //화1, 방2
});

const landReducer = (state = initialState, action) => produce(state, (draft => {
    switch(action.type) {
        case ADD_LAND_REQUEST :
            draft.addLandLoading = true;
            draft.addLandDone = false;
            draft.addLandError = null;
            break;
        case ADD_LAND_SUCCESS :
            draft.addLandLoading = false;
            draft.addLandDone = true;
            break;
        case ADD_LAND_FAILURE :
            draft.addLandLoading = false;
            draft.addLandError = action.error;
            break;
        default :
            break;
    }
}));

export default landReducer;