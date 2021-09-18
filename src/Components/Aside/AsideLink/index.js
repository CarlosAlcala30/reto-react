import React from 'react'
import "./style.scss"

const AsideLink = props => {
    const {text, image} = props
    return(
        <a type="link" class="aside-link">
            <img type="icono" src={image} class="icon-left-aside"></img>
            {text}
        </a>
    );
}

export default AsideLink
