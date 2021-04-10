import {sneakerServices} from '../services/sneakerServices'

export const ACT_FETCH_SNEAKERS = "ACT_FETCH_SNEAKERS"

export function getAllSneakers(sneakers){
     return {
         type: ACT_FETCH_SNEAKERS,
         payload: {
            sneakers
         }
     }
}

export function getAllSneakersAsync(){
    return async (dispatch, getState) => {
        try{
            const rest = await sneakerServices.getAllSneakers();
            const data = rest.data.results;

            dispatch(getAllSneakers(data));
        } catch(err){
            console.log(err);
        }
    }
}