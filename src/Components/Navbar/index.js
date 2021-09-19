import React, { Fragment } from "react";
import "./style.scss";

import Media from "react-media";

import LoginButton from "../Buttons/LoginButton";
import CreateButton from "../Buttons/CreateButton";
import InputSearch from "../Inputs/SearchInput";
import NavbarButton from "../Buttons/NavbarButton";

import { useHistory } from "react-router-dom";

import Logo from "../../Assets/Images/icons/logo.svg";
import Hamburger from "../../Assets/Images/icons/hamburger.svg";
import Search from "../../Assets/Images/icons/search.svg";

const Navegacion = (props) => {
  let history = useHistory();
  const { loginPage, createPage, searchState, setSearchState } = props;
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 399px)",
          medium: "(min-width: 400px) and ((max-width: 699px)",
          large: "(min-width: 700px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <NavbarButton 
                    icon={Hamburger}
                  />
                  <div className="logo">
                    <img
                      src={Logo}
                      alt="logo"
                      onClick={() => {
                        history.push("/");
                        setSearchState("");
                      }}
                    />
                  </div>                  
                  
                </div>
                <div className="nav-right-side">
                  <NavbarButton 
                      icon={Search}
                      page="/search"
                    />
                  <CreateButton text="Create account" page={createPage} />
                </div>
              </div>
            )}

            {matches.medium && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <div className="logo">
                    <img
                      src={Logo}
                      alt="logo"
                      onClick={() => {
                        history.push("/");
                        setSearchState("");
                      }}
                    />
                  </div>
                </div>
                <div className="nav-right-side">
                  <NavbarButton icon={Search} page="/search"/>
                  <LoginButton text="Log in" page={loginPage} />
                  <CreateButton text="Create account" page={createPage} />
                </div>
              </div>
            )}                

            {matches.large && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <div className="logo">
                    <img
                      src={Logo}
                      alt="logo"
                      onClick={() => {
                        history.push("/");
                        setSearchState("");
                      }}
                    />
                  </div>
                  <InputSearch
                    history={history}
                    pageSearch="/search"
                    searchState={searchState}
                    setSearchState={setSearchState}
                  />
                </div>
                <div className="nav-right-side">
                  <LoginButton text="Log in" page={loginPage} />
                  <CreateButton text="Create account" page={createPage} />
                </div>
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default Navegacion;
