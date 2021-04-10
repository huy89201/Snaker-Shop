import {ACT_FETCH_SNAKERS} from './snakerActions'

const initState = {
    allSnakers: [],
}

export default function snakerReducer(state = initState, action){
    switch(action.type){
        
        case ACT_FETCH_SNAKERS: 
            return {
                ...state,
                allSnakers: action.payload.snakers
            }

        default: return state;
    }
}