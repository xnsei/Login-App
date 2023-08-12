import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestAPI from "./pages/TestAPI";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index Component={Home} />
            <Route path="login" Component={Login} />
            <Route path="register" Component={Register} />
            <Route path="api" Component={TestAPI} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
