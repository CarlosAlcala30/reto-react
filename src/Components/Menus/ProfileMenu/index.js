import React from "react";

import "./style.scss";

import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

const MenuProfile = (props) => {
  const { name, lastName, picture, email } = props.userLogged;
  return (
    
    <UncontrolledButtonDropdown className="ml-2 mr-3">
      <DropdownToggle color="white" className="p-0">
        <img src={picture} alt="" />
      </DropdownToggle>
      <DropdownMenu right style={{width:"350px"}}>
        <DropdownItem>{name+" "+lastName}<br/><p>{email}</p></DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Create Post</DropdownItem>
        <DropdownItem>Listings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Sing out</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
};

export default MenuProfile;
