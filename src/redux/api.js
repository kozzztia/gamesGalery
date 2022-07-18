import axios from 'axios'
import { getGamesAction, searchGamesAction } from './store';

const url = 'https://api.rawg.io/api/';
export const fetchGames = (game, page) => {
    const target = "games";
    return function (dispatch) {
        axios.get(`${url + target}`, {
            params: {
                key: '3719d7855af54634ad3aa19763652ea2',
                page_size: 25,
                page: page,
                // search: findGame,
                genres: game,
            }
        })

            .then(response => dispatch(getGamesAction(response.data.results)))
    }
}
export const fetchSearchGames = (game, page, searched) => {
    const target = "games";
    return function (dispatch) {
        axios.get(`${url + target}`, {
            params: {
                key: '3719d7855af54634ad3aa19763652ea2',
                page_size: 25,
                page: page,
                search: searched,
                genres: game,
            }
        })

            .then(response => dispatch(searchGamesAction(response.data.results)))
    }
}

