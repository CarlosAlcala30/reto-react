import React, { useState, useEffect } from "react";
import { isExpired } from "react-jwt";

import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
} from "react-router-dom";

import Navegacion from "./Components/Navbar";

//paginas
import LoginPage from "./Pages/Login";
import CreatePostPage from "./Pages/CreatePost";

export default function App() {
  const [search, setSearch] = useState("");
  const [userLogged, setUserLogged] = useState({});
  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    if (userInfo) {
      const expired = isExpired(userInfo.token);
      if (!expired) {
        setUserLogged(userInfo);
        setIsLogged(true);
      } else {
        localStorage.removeItem("userData");
      }
    }
  }, []);

  return (
    <Router>
      {/*navbar*/}
      <Navegacion
        loginPage="/login"
        createPage="/register"
        searchState={search}
        setSearchState={setSearch}
        isLogged={isLogged}
        userLogged={userLogged}
      />

      {/*paginas*/}
      <Switch>
        <Route path="/login">
          <LoginPage handlerUserLogged={setUserLogged} handlerIsLogged={setIsLogged} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/create-post">
          {isLogged ? <CreatePostPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/post-detail/:id">
          <PostDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/*footer*/}
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function PostDetail() {
  const { id } = useParams();
  return <h2>Post Detail - {id}</h2>;
}
