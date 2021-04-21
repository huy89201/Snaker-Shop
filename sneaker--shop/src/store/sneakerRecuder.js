import { ACT_FETCH_SNEAKERS, ACT_FETCH_SNEAKERS_BY_ID } from "./sneakerActions";

const initState = {
  allSneakers: [],
  sneaker: {}
};

export default function sneakerReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_SNEAKERS:
      return {
        ...state,
        allSneakers: action.payload.sneakers,
      };
    
    case ACT_FETCH_SNEAKERS_BY_ID:
        return {
            ...state,
            sneaker: action.payload.sneaker
        }


    default:
      return state;
  }
}
