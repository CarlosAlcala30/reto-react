import React from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";

const NavbarButton = (props) => {
  
  let history = useHistory();  
  const { icon,page } = props;

  return (
    <button type="button" className="button-search" onClick={()=>{history.push(page)}}>
      <img src={icon} alt="" />
    </button>
  );
};

export default NavbarButton;
