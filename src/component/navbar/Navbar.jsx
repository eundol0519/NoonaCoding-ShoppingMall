import React, { useContext, useRef, useState } from "react";

import styles from "./Navbar.module.css";

import { faSearch, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

import SideBar from "../sidebar/SideBar";
import LoginContext from "../../contexts/login";

const Navbar = () => {
  const color = "#fff";
  const menuList = ["여성", "Devided", "남성", "신생아/유아", "H&M Home", "Sale", "지속가능성"];

  const { login, setLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  const [search, setSearch] = useState();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const searchRef = useRef();

  const inputHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const searchHandler = () => {
    if (searchRef.current !== search && search) {
      searchRef.current = search;
      navigate(`?q=${search}`);
    } else {
      alert("검색어가 없거나 동일한 검색어입니다. 다시 시도해주세요.");
    }
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const logoutHandler = () => {
    alert("로그아웃 되었습니다.");
    setLogin(false);
  };

  return (
    <React.Fragment>
      <div className={styles.navbar}>
        <FontAwesomeIcon
          className={styles.bar}
          icon={faBars}
          onClick={() => {
            setSideBarOpen(true);
          }}
        />
        <div className={styles.login}>
          <FontAwesomeIcon icon={faUser} color={color} />
          {!login ? (
            <Link to="/login">
              <p>로그인</p>
            </Link>
          ) : (
            <p className={styles.logout} onClick={logoutHandler}>
              로그아웃
            </p>
          )}
        </div>
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/logo.png" width={100} height={45} alt="logo" />
        </Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuList}>
          {menuList.map((item) => {
            return (
              <Link to="/products" key={item}>
                <p>{item}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} color={color} onClick={searchHandler} />
          <input ref={searchRef} value={search} onChange={inputHandler} onKeyDown={enterHandler} />
        </div>
      </div>
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
    </React.Fragment>
  );
};

export default Navbar;
