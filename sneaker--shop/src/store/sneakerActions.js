import {sneakerServices} from '../services/sneakerServices'

export const ACT_FETCH_SNEAKERS = "ACT_FETCH_SNEAKERS"
export const ACT_FETCH_SNEAKERS_BY_ID = "ACT_FETCH_SNEAKERS_BY_ID"

export function getAllSneakers(sneakers){
     return {
         type: ACT_FETCH_SNEAKERS,
         payload: {
            sneakers
         }
     }
}

export function getSneakersById(sneaker){
    return {
        type: ACT_FETCH_SNEAKERS_BY_ID,
        payload: {
            sneaker
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

export function getSneakersByIdAsync(id){
    return async (dispatch, getState) => {
        try {
            const rest = await sneakerServices.getSneakersById(id);
            // console.log("this rest: ",rest);
            const sneaker = rest.data.results

            dispatch(getSneakersById(sneaker));
        } catch(err){
            console.log(err);
        }
    }
}