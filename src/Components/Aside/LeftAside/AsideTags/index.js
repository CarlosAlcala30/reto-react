import React from 'react'
import "./style.scss"
import { Button } from 'reactstrap';


const AsideTag = props => {
    const {text} = props
    return(
        <>
        <div type="link" class="aside-tag">
            {text}
        </div>
        <button type="button" class="tag-button">Follow</button>
        </>
    );
}

export default AsideTag