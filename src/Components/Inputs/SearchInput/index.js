import React from "react";
import "./style.scss";
import SearchIcon from "../../../Assets/Images/icons/search.svg";

import {
    useHistory,
  } from "react-router-dom";

const InputSearch = (props) => {

    const {searchState,setSearchState} = props

    let history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push({
            pathname:"/search",
            search:"?q="+searchState
        });
    };    
    
    return (
        <div>
        <form className="container-search" onSubmit={handleSubmit}>
            <input className="input-search" type="text" name="search" value={searchState} onChange={event=>{setSearchState(event.target.value)}}/>
            <button type="submit" className="button-search">
                <img src={SearchIcon} alt="" />
            </button>   
        </form>
        </div>
  );
};

export default InputSearch;
