import logo from './logo.svg';
import './App.css';
import bg from './images/Bg.png'
import Header from './Header/Header';
import Home from './Home/Home';
import Destination from './Destination/Destination';
import Signup from './SignUp/Signup';            
import Login from './Login/Login';            
import Notfound from './Notfound/Notfound';            
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
export const UserContext= createContext()
function App() {

 const [LoggedIn, setLoggedIn]= useState({});



  return (
    <UserContext.Provider value={[LoggedIn, setLoggedIn]}>
     
   
 
  
   <Router>
   <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path="/destination">
           <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
         
          <Route exact path="/">
         <Home></Home>
          </Route>
          
        <Route path="*">
          <Notfound></Notfound>
        </Route>
        </Switch>
      </Router>
    
    </UserContext.Provider>
  );
}

export default App;
