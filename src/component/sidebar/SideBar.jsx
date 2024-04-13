import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SideBar.module.css";

const SideBar = ({ sideBarOpen, setSideBarOpen }) => {
  const menuList = ["여성", "Devided", "남성", "신생아/유아", "H&M Home", "Sale", "지속가능성"];

  const sideBarRef = useRef();

  // 사이드바 외부 영역 클릭 시
  useEffect(() => {
    const handleClick = (e) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        setSideBarOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [sideBarRef]);

  return (
    <div ref={sideBarRef} className={`${styles.sideBar} ${sideBarOpen ? styles.open : styles.close}`}>
      <FontAwesomeIcon icon={faClose} onClick={() => setSideBarOpen(false)} />
      <div className={styles.menuList}>
        {menuList.map((item) => {
          return (
            <Link to="/products" key={item}>
              <p>{item}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
