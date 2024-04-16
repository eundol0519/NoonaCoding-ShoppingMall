import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import List from "./pages/list/List";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import Navbar from "./component/navbar/Navbar";
import LoginContext from "./contexts/login";

import "./App.css";

interface LoginContextValue {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [login, setLogin] = useState(true);

  const contextValue: LoginContextValue = {
    login,
    setLogin,
  };

  return (
    <LoginContext.Provider value={contextValue}>
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
