import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import Alldata from "./pages/alldata";
import Balance from "./pages/balance";
import CreateAccount from "./pages/createaccount";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";
import NaviBar from "./pages/naviBar";
import {
  Context,
  useUserContext,
  UserContext,
  UserProvider,
} from "./pages/context";
import {
  LoggedInContext,
  LoggedInContextProvider,
  useLoggedInContext,
} from "./pages/LoggedInContext";
import { useContext, useEffect, useState } from "react";
import {
  Card,
  Navbar,
  NavbarBrand,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Button,
} from "reactstrap";
import UserBar from "./pages/UserBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <NaviBar />
          <UserBar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/alldata" element={<Alldata />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
