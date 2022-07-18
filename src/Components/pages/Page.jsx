
import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch,  shallowEqual} from 'react-redux';
import { fetchGames  } from '../../redux/api';
import PreLoader from '../Load/PreLoader';
import {useLocation} from 'react-router-dom';
import style from './page.module.scss'
import SearchInput from './../searchInput/SearchInput';





const Page = ({text, game , page}) => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games,shallowEqual);
    const location = useLocation();
    const [flug , setFlug] = useState(true)
    useEffect(()=>{

        dispatch(fetchGames(game , page));
        setFlug(!flug);
    },[])
    useEffect(()=>{
        dispatch(fetchGames(game , page));
        console.log(game);
    },[location]);
    useEffect(()=>{
        setFlug(!flug);
    },[games, location]);


  return (
    <div className={style.pageList}>
        <h2 className={style.gameTitle}>{game} page #{page}</h2>
        {/* <SearchInput data={{game , page}}/> */}
        <div className={style.gameWrapper}>
        {
            flug?<PreLoader />:
            games.map((game, index) => 
            <div 
            className={style.gameItem}
            key={game.id}>№{index+1}: {game.name}
            <img style={{width: '100px', height: '100px' }} 
            src={game.background_image} alt="alt" />
            </div>)


        }
        </div>
    </div>
  )
}

export default Page
