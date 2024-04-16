import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SideBar.module.css";

interface PropsType {
  sideBarOpen: boolean;
  setSideBarOpen: (prev: boolean) => void;
}

const SideBar = (props: PropsType) => {
  const { sideBarOpen, setSideBarOpen } = props;

  const menuList = [
    "여성",
    "Devided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const sideBarRef = useRef<HTMLDivElement | null>(null);

  // 사이드바 외부 영역 클릭 시
  useEffect(() => {
    const handleClick: EventListener = (e) => {
      const mouseEvent = e as MouseEvent;

      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(mouseEvent.target as Node)
      ) {
        setSideBarOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [sideBarRef]);

  return (
    <div
      ref={sideBarRef}
      className={`${styles.sideBar} ${
        sideBarOpen ? styles.open : styles.close
      }`}
    >
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
