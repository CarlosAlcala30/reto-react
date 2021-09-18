import React from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";

const LoginButton = (props) => {
  const history = useHistory();
  const { text, page } = props;
  return (
    <button type="button" className="btn-login" onClick={()=>{history.push(page)}}>{text}</button>
  );
};

export default LoginButton;
