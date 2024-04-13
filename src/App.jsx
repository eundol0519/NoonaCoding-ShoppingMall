import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import List from "./pages/list/List";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Navbar from "./component/navbar/Navbar";
import LoginContext from "./context/login.js";

import "./App.css";

function App() {
  const [login, setLogin] = useState();

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<List />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
