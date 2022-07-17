import axios from 'axios'
import { getGamesAction, getCountAction } from './store';



export const fetchGames = (game) => {
    const url = 'https://api.rawg.io/api/';
    const target = "games";
    const findGame = game;
    return function (dispatch) {
        axios.get(`${url + target}`, {
            params: {
                key: '3719d7855af54634ad3aa19763652ea2',
                page_size: 25,
                page: 1,
                // search: findGame,
                genres: game,
            }
        })

            .then(response => dispatch(getGamesAction(response.data.results, getCountAction(response.data.count))))


    }
}