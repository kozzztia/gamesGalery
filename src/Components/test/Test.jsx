
import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch,  shallowEqual} from 'react-redux';
import { fetchGames } from './../../redux/api';
import PreLoader from './../Load/PreLoader';
import {useLocation} from 'react-router-dom';






const Test = ({text, game}) => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);
    const location = useLocation();
    const [flug , setFlug] = useState(true)
    useEffect(()=>{
        dispatch(fetchGames(game));
        setFlug(!flug);
    },[])
    useEffect(()=>{
        dispatch(fetchGames(game));
    },[location]);
    useEffect(()=>{
        setFlug(!flug);
    },[games, location]);
  return (
    <div>
        <h2>{game}</h2>
        <div>
        {
            flug?<PreLoader />:
            games.map((game, index) => <div key={game.id}>№{index+1}: {game.name}
                <img src={game.img} alt="" />
            </div>)


        }
                    <p>flug:{flug.toString()}</p>
        </div>
    </div>
  )
}

export default Test
