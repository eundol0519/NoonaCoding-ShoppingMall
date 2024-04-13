import React from "react";

import { Link } from "react-router-dom";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SideBar.module.css";

const SideBar = ({ sideBarOpen, setSideBarOpen }) => {
  const menuList = ["여성", "Devided", "남성", "신생아/유아", "H&M Home", "Sale", "지속가능성"];

  return (
    <div className={`${styles.sideBar} ${sideBarOpen ? styles.open : styles.close}`}>
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
