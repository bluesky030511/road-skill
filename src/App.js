import { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Appoinment from './component/AppointMent/Appoinment/Appoinment';
import Login from './component/Login/Login/Login';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import AllLesson from './component/AllLesson/AllLesson/AllLesson';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import AddConstructor from './component/Dashboard/AddConstructor/AddConstructor';
import Services from './component/Dashboard/AddServices/AddServices';
import AddServices from './component/Dashboard/AddServices/AddServices';
import DeleteService from './component/Dashboard/DeleteService/DeleteService';
import Review from './component/Dashboard/Review/Review';
import CheckOut from './component/Home/CheckOut/CheckOut';
import MyOrder from './component/Home/MyOrder/MyOrder';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/lesson">
            <AllLesson></AllLesson>
          </Route>

          <PrivateRoute path="/AddServices">
            <AddServices></AddServices>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/appointment">
            <Appoinment></Appoinment>
          </PrivateRoute>

          <PrivateRoute path="/addConstructor">
            <AddConstructor></AddConstructor>
          </PrivateRoute>

          <PrivateRoute path="/delete">
            <DeleteService></DeleteService>
          </PrivateRoute>

          <PrivateRoute path="/addReview">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>

          <PrivateRoute path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>






        </Switch>
      </Router>
    </UserContext.Provider>
  );
}


export default App;
