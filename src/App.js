import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import LoginButton from "./Components/Buttons/LoginButton";
import CreateButton from "./Components/Buttons/CreateButton"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/create-post">Create Post</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/post-detail/4wda1sda4f">Post Detail</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    <>
      <h2>Home</h2>
      <LoginButton
        text="Log in"      
      />
      <CreateButton
        text="Create account"  
      />
    </>
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
