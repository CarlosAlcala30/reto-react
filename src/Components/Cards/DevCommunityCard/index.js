import React from 'react'
import "./style.scss"
import { Card, CardTitle, CardText } from 'reactstrap';
import CreateButton from '../../Buttons/CreateButton';
import LoginButton from '../../Buttons/LoginButton';

const DevCard = () => {
    return(
        <div>
      <Card body class="card-body" >
        <CardTitle tag="h3"><b><div class="dev-title-purple" >DEV Community</div>  is a community of 696,672 amazing developers</b></CardTitle>
        <CardText>We're a place where coders share, stay up-to-date and grow their careers.</CardText>
        <CreateButton text="Create new account" />
        <LoginButton text="Log in" />
      </Card>
    </div>
    );
}

export default DevCard