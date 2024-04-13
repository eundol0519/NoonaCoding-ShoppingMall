import React, { useContext, useEffect } from "react";
import LoginContext from "../context/login";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { login } = useContext(LoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    }
  }, [login]);

  return <div></div>;
};

export default Detail;
