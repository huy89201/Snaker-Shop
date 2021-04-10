import {ACT_FETCH_SNEAKERS} from './sneakerActions'

const initState = {
    allSneakers: [],
}

export default function sneakerReducer(state = initState, action){
    switch(action.type){
        
        case ACT_FETCH_SNEAKERS: 
            return {
                ...state,
                allSneakers: action.payload.sneakers
            }

        default: return state;
    }
}