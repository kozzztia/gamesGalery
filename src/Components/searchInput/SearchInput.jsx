import React from 'react'
import style from './searchInput.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { GET_INPUT_VALUE } from '../../redux/consts';
import { fetchSearchGames } from '../../redux/api';




const SearchInput = ({data}) => {
  console.log(data)
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.games.inputValue)

  return (
    <form className={style.searchForm} onSubmit={(e)=>{
        e.preventDefault();
        // dispatch(fetchSearchGames(data.game , data.page , inputValue))
        dispatch({type :GET_INPUT_VALUE , payload : e.target.value = ""})
        
        }}>
      <input className={style.searchInput} onChange={(e)=>dispatch({type :GET_INPUT_VALUE , payload : e.target.value})} value = {inputValue}/>
      <button className={style.searchBtn} >search</button>
    </form>
  )
}

export default SearchInput
