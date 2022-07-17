import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { GET_GAMES, GET_COUNTS } from './consts';
import thunk from 'redux-thunk';



const initialStore = {
    games: [],
    counts: "",

}






const gamesReducer = (state = initialStore, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: [...action.payload],
                // games: action.payload,
            }
        case GET_COUNTS:
            return {
                ...state,
                counts: action.payload,
                // games: action.payload,
            }

        default:
            return state
    }
}
const rootReducer = combineReducers({
    games: gamesReducer,
})



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const getGamesAction = (payload) => ({ type: GET_GAMES, payload });
export const getCountAction = (payload) => ({ type: GET_COUNTS, payload });

