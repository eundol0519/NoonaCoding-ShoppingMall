import React, { useRef, useState } from "react";

import styles from "./Navbar.module.css";

import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  const color = "#fff";
  const menuList = ["여성", "Devided", "남성", "신생아/유아", "H&M Home", "Sale", "지속가능성"];

  const [search, setSearch] = useState();
  const searchRef = useRef();

  const inputHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const searchHandler = () => {
    if (searchRef.current !== search && search) {
      alert("검색");
      // 검색 api 요청
      searchRef.current = search;
    } else {
      alert("검색어가 없거나 동일한 검색어입니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div className={styles.navbar}>
        <Link to="/login">
          <div className={styles.login}>
            <FontAwesomeIcon icon={faUser} color={color} />
            <p>로그인</p>
          </div>
        </Link>
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img src="logo.png" width={100} height={45} alt="logo" />
        </Link>
        <div className={styles.menuList}>
          {menuList.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} color={color} onClick={searchHandler} />
          <input ref={searchRef} value={search} onChange={inputHandler} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
