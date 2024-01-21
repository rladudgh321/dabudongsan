const { produce } = require("immer")

const initialState = {
    land_request: null,
    lia:'리',
    eupArray:[],
    eumpmeon:'읍/면',
    address:null,
    chilgok: [{
        key:1,
        label:'왜관읍',
        value:'왜관읍',
        more:[{
            key:1,
            label:'왜관리',
            value:'왜관리',
        },{
            key:2,
            label:'석전리',
            value:'석전리',
        },{
            key:3,
            label:'매원리',
            value:'매원리',
        },{
            key:4,
            label:'봉계리',
            value:'봉계리',
        },{
            key:5,
            label:'삼청리',
            value:'삼청리',
        },{
            key:6,
            label:'금남리',
            value:'금남리',
        },{
            key:7,
            label:'금산리',
            value:'금산리',
        },{
            key:8,
            label:'낙산리',
            value:'낙산리',
        },{
            key:9,
            label:'아곡리',
            value:'아곡리',
        }],
    },{
        key:2,
        label:'북삼읍',
        value:'북삼읍',
        more:[{
            key:1,
            label:'인평리',
            value:'인평리',
        },{
            key:2,
            label:'숭오리',
            value:'숭오리',
        },{
            key:3,
            label:'율리',
            value:'율리',
        },{
            key:4,
            label:'어로리',
            value:'어로리',
        },{
            key:5,
            label:'보손리',
            value:'보손리',
        },{
            key:6,
            label:'오평리',
            value:'오평리',
        }],
    },{
        key:3,
        label:'석적읍',
        value:'석적읍',
        more:[{
            key:1,
            label:'남율리',
            value:'남율리',
        },{
            key:2,
            label:'포남리',
            value:'포남리',
        },{
            key:3,
            label:'중지리',
            value:'중지리',
        },{
            key:4,
            label:'망정리',
            value:'망정리',
        },{
            key:5,
            label:'반계리',
            value:'반계리',
        },{
            key:6,
            label:'도개리',
            value:'도개리',
        },{
            key:7,
            label:'성곡리',
            value:'성곡리',
        },{
            key:8,
            label:'중리',
            value:'중리',
        }],
    },{
        key:4,
        label:'지천면',
        value:'지천면',
        more:[{
            key:1,
            label:'신리',
            value:'신리',
        },{
            key:2,
            label:'송정리',
            value:'송정리',
        },{
            key:3,
            label:'연화리',
            value:'연화리',
        },{
            key:4,
            label:'연호리',
            value:'연호리',
        },{
            key:5,
            label:'금호리',
            value:'금호리',
        },{
            key:6,
            label:'달서리',
            value:'달서리',
        },{
            key:7,
            label:'백운리',
            value:'백운리',
        },{
            key:8,
            label:'창평리',
            value:'창평리',
        },{
            key:9,
            label:'심천리',
            value:'심천리',
        },{
            key:10,
            label:'영오리',
            value:'영오리',
        },{
            key:11,
            label:'덕산리',
            value:'덕산리',
        },{
            key:12,
            label:'오산리',
            value:'오산리',
        },{
            key:13,
            label:'용산리',
            value:'용산리',
        },{
            key:14,
            label:'낙산리',
            value:'낙산리',
        },{
            key:15,
            label:'황학리',
            value:'황학리',
        }],
    },{
        key:5,
        label:'동명면',
        value:'동명면',
        more:[{
            key:1,
            label:'금암리',
            value:'금암리',
        },{
            key:2,
            label:'봉암리',
            value:'봉암리',
        },{
            key:3,
            label:'송산리',
            value:'송산리',
        },{
            key:4,
            label:'가천리',
            value:'가천리',
        },{
            key:5,
            label:'학명리',
            value:'학명리',
        },{
            key:6,
            label:'득명리',
            value:'득명리',
        },{
            key:7,
            label:'남원리',
            value:'남원리',
        },{
            key:8,
            label:'기성리',
            value:'기성리',
        },{
            key:9,
            label:'구덕리',
            value:'구덕리',
        }],
    },{
        key:6,
        label:'가산면',
        value:'가산면',
        more:[{
            key:1,
            label:'다부리',
            value:'다부리',
        },{
            key:2,
            label:'금화리',
            value:'금화리',
        },{
            key:3,
            label:'가산리',
            value:'가산리',
        },{
            key:4,
            label:'응추리',
            value:'응추리',
        },{
            key:5,
            label:'용수리',
            value:'용수리',
        },{
            key:6,
            label:'천평리',
            value:'천평리',
        },{
            key:7,
            label:'송학리',
            value:'송학리',
        },{
            key:8,
            label:'심곡리',
            value:'심곡리',
        },{
            key:9,
            label:'학하리',
            value:'학하리',
        },{
            key:10,
            label:'학상리',
            value:'학상리',
        },{
            key:11,
            label:'학산리',
            value:'학산리',
        },{
            key:12,
            label:'석우리',
            value:'석우리',
        }],
    },{
        key:7,
        label:'약목면',
        value:'약목면',
        more:[{
            key:1,
            label:'복성리',
            value:'복성리',
        },{
            key:2,
            label:'동안리',
            value:'동안리',
        },{
            key:3,
            label:'남계리',
            value:'남계리',
        },{
            key:4,
            label:'교리',
            value:'교리',
        },{
            key:5,
            label:'덕산리',
            value:'덕산리',
        },{
            key:6,
            label:'무림리',
            value:'무림리',
        },{
            key:7,
            label:'관호리',
            value:'관호리',
        }],
    },{
        key:8,
        label:'기산면',
        value:'기산면',
        more:[{
            key:1,
            label:'죽전리',
            value:'죽전리',
        },{
            key:2,
            label:'평복리',
            value:'평복리',
        },{
            key:3,
            label:'영리',
            value:'영리',
        },{
            key:4,
            label:'행정리',
            value:'행정리',
        },{
            key:5,
            label:'봉산리',
            value:'봉산리',
        },{
            key:6,
            label:'각산리',
            value:'각산리',
        },{
            key:7,
            label:'노석리',
            value:'노석리',
        }],
    }],
}

export const UpdateEumpmeon = 'UpdateEumpmeon';
export const UpdateLi = 'UpdateLi';
export const LAND_REQUEST = 'LAND_REQUEST';

const locationReducer = (state = initialState, action) => produce(state, (draft => {
    switch(action.type){
        case UpdateEumpmeon :
            draft.eumpmeon = action.data.eup;
            draft.eupArray = action.data.more;
            break;
        case UpdateLi :
            draft.lia = action.data;
            break;
        case LAND_REQUEST :
            draft.land_request = action.data;
            break;
        default :
            break;
    }
}));

export default locationReducer;