import {snakerServices} from '../services/snakerServices'

export const ACT_FETCH_SNAKERS = "ACT_FETCH_SNAKERS"

export function getAllSnakers(snakers){
     return {
         type: ACT_FETCH_SNAKERS,
         payload: {
            snakers
         }
     }
}

export function getAllSnakersAsync(){
    return async (dispatch, getState) => {
        try{
            const rest = await snakerServices.getAllSnakers();
            const data = rest.data.results;

            dispatch(getAllSnakers(data));
        } catch(err){
            console.log(err);
        }
    }
}