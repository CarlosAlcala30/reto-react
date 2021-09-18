import React from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";

const CreateButton = (props) => {
  const history = useHistory();
  const { text, page } = props;
  return (
    <button type="button" className="btn-create" onClick={()=>{history.push(page)}}>{text}</button>
  );
};

export default CreateButton;
