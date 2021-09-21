import React, { Fragment } from "react";
import "./style.scss";

import Media from "react-media";

//componenetes
import LoginButton from "../Buttons/LoginButton";
import CreateButton from "../Buttons/CreateButton";
import InputSearch from "../Inputs/SearchInput";
import NavbarButton from "../Buttons/NavbarButton";
import MenuProfile from "../Menus/ProfileMenu";

import { useHistory } from "react-router-dom";

//iconos
import Logo from "../../Assets/Images/icons/logo.svg";
import Hamburger from "../../Assets/Images/icons/hamburger.svg";
import Search from "../../Assets/Images/icons/search.svg";
import Notificaciones from "../../Assets/Images/icons/notifications.svg"
import Conectado from "../../Assets/Images/icons/connect.svg"

const Navegacion = (props) => {
  let history = useHistory();
  const { loginPage, createPage, searchState, setSearchState, isLogged,userLogged } = props;
  return (
    <div className="navbar-container">
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
                { 
                  isLogged ? (
                    <div className="nav-right-side">                      
                      <NavbarButton icon={Search} page="/search"/>
                      <NavbarButton icon={Notificaciones}/>
                      <NavbarButton icon={Conectado}/>
                      <MenuProfile userLogged={userLogged}/>
                    </div>
                  ) 
                    :                   
                  ( 
                    <div className="nav-right-side">
                      <NavbarButton icon={Search} page="/search"/>
                      <CreateButton text="Create account" page={createPage} />
                    </div>
                  ) 
                
                }
              </div>
            )}

            {matches.medium && (
              <div className="nav-container">
                <div className="nav-left-side">
                  <NavbarButton icon={Hamburger}/>
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
                { 
                  isLogged ? (
                    <div className="nav-right-side">                      
                      <NavbarButton icon={Search} page="/search"/>
                      <NavbarButton icon={Notificaciones}/>
                      <NavbarButton icon={Conectado}/>
                      <MenuProfile userLogged={userLogged}/>
                    </div>
                  ) 
                    :                   
                  ( 
                    <div className="nav-right-side">
                      <NavbarButton icon={Search} page="/search"/>
                      <CreateButton text="Create account" page={createPage} />
                    </div>
                  ) 
                
                }
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
                { 
                  isLogged ? (
                    <div className="nav-right-side">
                      <CreateButton text="Create Post" page="/create-post" />
                      <NavbarButton icon={Notificaciones}/>
                      <NavbarButton icon={Conectado}/>
                      <MenuProfile userLogged={userLogged}/>
                    </div>
                  ) 
                    :                   
                  ( 
                    <div className="nav-right-side">
                      <LoginButton text="Log in" page={loginPage} />
                      <CreateButton text="Create account" page={createPage} />
                    </div>
                  ) 
                
                }
                
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default Navegacion;
