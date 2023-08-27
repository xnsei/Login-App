import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register";
import TestAPI from "./pages/TestAPI";
import greet from "./greet/greet";

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
            <Route path="greet" Component={greet} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
