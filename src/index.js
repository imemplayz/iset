import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Users from "./pages/Users";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AccessDenied from "./pages/AccessDenied";
import PageNotFound from "./pages/PageNotFound";
import Rooms from "./pages/Rooms";
import Courses from "./pages/Courses";
import Admin from "./pages/Admin";
import Team from "./pages/Team";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/classes" element={<Rooms />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/team" element={<Team />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/403" element={<AccessDenied />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
