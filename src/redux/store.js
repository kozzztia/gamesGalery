import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { GET_GAMES } from './consts';
import thunk from 'redux-thunk';



const initialStore = {
    games: [],

}






const gamesReducer = (state = initialStore, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: [...action.payload],
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

