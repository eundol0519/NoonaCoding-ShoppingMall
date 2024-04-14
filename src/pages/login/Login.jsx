import React, { useContext, useState } from "react";
import LoginContext from "../../contexts/login";
import { useNavigate } from "react-router-dom";

import { emailRegex } from "../../utils/regex";

import styles from "./Login.module.css";

const Login = () => {
  const { setLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ id: "", password: "" });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = () => {
    if (userInfo.id && userInfo.password) {
      if (!userInfo.id.match(emailRegex)) {
        alert("아이디는 이메일 형식으로 적어주세요.");
        return;
      }
      setLogin(true);
      alert("로그인 되었습니다.");
      navigate("/products");
    } else {
      alert("아이디 혹은 비밀번호를 입력 후 다시 시도해주세요.");
    }
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      loginHandler();
    }
  };

  return (
    <form className={styles.wrap}>
      <label>
        아이디
        <input type="email" name="id" placeholder="email" value={userInfo.id} onChange={inputHandler} />
      </label>
      <label>
        비밀번호
        <input type="password" name="password" placeholder="password" value={userInfo.password} onChange={inputHandler} onKeyDown={enterHandler} />
      </label>
      <button onClick={loginHandler}>로그인</button>
    </form>
  );
};

export default Login;
