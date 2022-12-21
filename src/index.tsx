/** @format */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, unstable_HistoryRouter as HistoryBrowser } from "react-router-dom";
import Carts from "./pages/Carts/Carts";
import Detail from "./pages/Detail/Detail";

import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import HomeTemplate from "./templates/HomeTemplate";
// scss
import "./assets/scss/style.scss";
import './assets/boxicons-2.0.7/css/boxicons.min.css'
//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Home from "./pages/Home/Home";
import Catelog from "./pages/Catelog/Catelog";
import Contact from "./pages/Contact/Contact";
import { history } from "./utils/config";

//Setup React-Router-Dom
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryBrowser history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="carts" element={<Carts />}></Route>
          <Route path="detail" element={<Detail />}>
            <Route path=":id"></Route>
          </Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="catalog" element={<Catelog />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </HistoryBrowser>
  </Provider>
);
