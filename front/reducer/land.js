import { produce } from "immer";
import shortid from 'short-id';
const initialState = {
    imagePath: null,
    eumpmeon:null,
    lia:null,
    address:null,
    addLandLoading:false,
    addLandDone:false,
    addLandError:null,
    uploadImageLoading:false,
    uploadImageDone:false,
    uploadImageError:null,
    landFunc:[{
        id:1,
        image:{src:'/img/1/office.png'},
        options:{ landType:'빌라', floor:'50층', room:'방10, 화4' },
        title: '전세 10억 보증금 5억',
        address: '대전 동구 가양동 323-21',
        description:'전/월세 가능한 초호화 빌라 곧 역세권, 재개발부지'
    },{
        id:2,
        image:{src:'/img/1/office.png'},
        options:{ landType:'빌라', floor:'50층', room:'방10, 화4' },
        title: '전세 10억 보증금 5억',
        address: '대전 동구 가양동 323-21',
        description:'전/월세 가능한 초호화 빌라 곧 역세권, 재개발부지'
    },{
        id:3,
        image:{src:'/img/1/office.png'},
        options:{ landType:'빌라', floor:'50층', room:'방10, 화4' },
        title: '전세 10억 보증금 5억',
        address: '대전 동구 가양동 323-21',
        description:'전/월세 가능한 초호화 빌라 곧 역세권, 재개발부지'
    }]
}

// const dummyImage = (data) => ({
//     id: shortid.generate(),
//     image: {
//         src: data
//     }
// });

export const ADD_LAND_REQUEST='ADD_LAND_REQUEST';
export const ADD_LAND_SUCCESS='ADD_LAND_SUCCESS';
export const ADD_LAND_FAILURE='ADD_LAND_FAILURE';
export const UPLOAD_IMAGE_REQUEST='UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS='UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE='UPLOAD_IMAGE_FAILURE';

/*
타이틀: 전세 2억 5천만 보증금 5천만
코멘트: 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!
주소: 대전 동구 가양동,
기타사항:화장실1, 주차1, 관리비10
랜드타입: 아파트/신축/원룸

*/
export const dummyLand = (data) => ({
    id:shortid.generate(),
    image:{src:`http://localhost:4000/${data.filename}`}, // src: 'waklfjklwfjeweawafeawefawefweaf'
    title:data.title,
    address:`${data.eumpmeon} ${data.lia} ${data.address}`,
    description: data.description,
    options: {
        landType: data.buyType,
        floor: data.floor,
        room:data.room
    }
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
            // draft.eumpmeon = action.data.eumpmeon;
            // draft.lia = action.data.lia;
            // draft.address = action.data.address;
            draft.landFunc.unshift(dummyLand(action.data));
            break;
        case ADD_LAND_FAILURE :
            draft.addLandLoading = false;
            draft.addLandError = action.error;
            break;
        case UPLOAD_IMAGE_REQUEST :
            draft.uploadImageLoading = true;
            draft.uploadImageDone = false;
            draft.uploadImageError = null;
            break;
        case UPLOAD_IMAGE_SUCCESS :
            draft.uploadImageLoading = false;
            draft.uploadImageDone = true;
            draft.imagePath = action.data;
            break;
        case UPLOAD_IMAGE_FAILURE :
            draft.uploadImageLoading = false;
            draft.uploadImageError = action.error;
            break;
        default :
            break;
    }
}));

export default landReducer;