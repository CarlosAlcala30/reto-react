import React from 'react';
import './styles.scss'

const LoginButton = props => {
    const {text} = props
    return(
        <button type="button" class="btn-create">{text}</button>
    );
}


export default LoginButton