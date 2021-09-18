import React,{useState} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AsideLink from "./Components/Aside/AsideLink"
import iconHome from "./Assets/Images/icons/home.svg"
import IconSocialNetwork from "./Components/Aside/iconSocialNetwork"
import imageIcon from "./Assets/Images/icons/twitter.svg"

import Navegacion from "./Components/Navbar"

export default function App() {

  const [search,setSearch] = useState("");


  return (
    <Router>
      <Navegacion 
          loginPage="/login"
          createPage="/register"
          searchState={search}
          setSearchState={setSearch}
      />
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/post-detail/:id">
            <PostDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
      <h2>Home</h2>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function CreatePost() {
  return <h2>CreatePost</h2>;
}

function PostDetail() {
  const { id } = useParams();
  return <h2>Post Detail - {id}</h2>;
}
