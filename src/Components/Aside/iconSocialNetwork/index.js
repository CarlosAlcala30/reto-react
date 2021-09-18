import React from 'react'
import "./style.scss"

const IconSocialNetwork = props =>{
        const {image} = props
    return(
        <a type="link" class="icon-social-network">
            <img type="icon" src= {image} class="image-social-network"></img>
        </a>
    );
}

export default IconSocialNetwork