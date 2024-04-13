import React, { useContext, useState } from "react";
import MyContext from "../context/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setLogin } = useContext(MyContext);

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ id: null, password: null });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const loginHandler = () => {
    if (userInfo.id && userInfo.password) {
      // 로그인 api 요청
      setLogin(true);
      alert("로그인 되었습니다.");
      navigate("/products");
    }
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      loginHandler();
    }
  };

  return (
    <div>
      <input type="email" name="id" value={userInfo.id} onChange={inputHandler} />
      <input type="password" name="password" value={userInfo.password} onChange={inputHandler} onKeyDown={enterHandler} />
      <button onClick={loginHandler}>로그인</button>
    </div>
  );
};

export default Login;
