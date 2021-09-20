import React from 'react'
import "./style.scss"

import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/search");
  }

  return (
    <button type="button" onClick={handleClick}>
      Buscar
    </button>
  );
}

export default AsideLinkSearch