import React, { useContext, useEffect, useRef, useState } from "react";
import LoginContext from "../../contexts/login";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../element/Spinner";

import styles from "./Detail.module.css";
import { amountRegex } from "../../utils/regex";

const Detail = () => {
  const { login } = useContext(LoginContext);
  const { id } = useParams();

  const navigate = useNavigate();

  const dropDownRef = useRef();

  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (!login) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    }
  }, [login]);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    await axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [dropDownRef]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <>
      {data ? (
        <div className={styles.wrap}>
          <img src={data.img} width={300} alt={`productDetailImg${id}`} />
          <div>
            <span className={styles.new}>{data.new ? "new" : null}</span>
            <p className={styles.choice}>{data.choice ? "concious choice" : null}</p>
            <h3>{data.title}</h3>
            <h5>￦ {String(data.price).replaceAll(amountRegex, ",")}</h5>
            <div className={styles.dropdown} ref={dropDownRef}>
              <button className={styles.dropdownToggle} onClick={handleToggleDropdown}>
                {selectedValue || "사이즈 선택"}
              </button>
              {isOpen && (
                <ul className={styles.dropdownMenu}>
                  {data.size.map((item) => (
                    <li key={item} onClick={() => handleSelectOption(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className={styles.addBtn}>추가하기</button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Detail;
