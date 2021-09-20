import React from "react";

import "./style.scss";

const FilterLink = (props) => {  
    const {text} = props
    return (
       <li>
           <button type="button" className="filter-button">{text}</button>
       </li>
    )
}

export default FilterLink;