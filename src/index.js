import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from './App';
import List from './pages/list/List';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Navbar from './component/navbar/Navbar';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  [유저 스토리]
  - 로그인, 전체, 상세 페이지 필요
  - 전체 페이지는 전체 상품 볼 수 있음
  - 로그인 버튼을 누르면 로그인 화면으로
  - 상세 페이지는 로그인이 되어 있으면 상세로, 안되어 있으면 로그인으로
  - 로그아웃 버튼 누르면 alert 띄우면서 로그인 페이지로 이동
  - 로그인을 하면 로그아웃 버튼, 로그아웃이면 로그인 버튼 노출
  - 상품 검색 기능 필요
*/

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<List />} />
        <Route path="/products/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
