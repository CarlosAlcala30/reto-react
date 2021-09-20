import React from 'react'
import "./style.scss"

const AsideLink = props => {
    const {text, image} = props
    return(
        <div type="link" class="aside-link">
            <img type="icono" src={image} class="icon-left-aside"></img>
            {text}
        </div>
    );
}

export default AsideLink
