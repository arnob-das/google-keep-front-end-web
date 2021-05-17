import React, { createContext, useState } from 'react';
import './App.css';
import Keep from './Components/Keep';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [number, setNumber] = useState(0)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, number, setNumber ]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/">
            <Keep></Keep>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;

