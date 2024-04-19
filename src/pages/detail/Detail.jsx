import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../element/Spinner";

import styles from "./Detail.module.css";
import { amountRegex } from "../../utils/regex";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/slice/productSlice";

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);
  const productDetail = useSelector((state) => state.product.productDetail);

  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (!authenticate) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    } else {
      dispatch(getProductDetail(id));
    }
  }, [authenticate]);

  useEffect(() => {
    const handleClick = (e) => {
      const mouseEvent = e;

      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(mouseEvent.target)
      ) {
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
      {productDetail ? (
        <div className={styles.wrap}>
          <img
            src={productDetail.img}
            width={300}
            alt={`productDetailImg${id}`}
          />
          <div>
            <span className={styles.new}>
              {productDetail.new ? "new" : null}
            </span>
            <p className={styles.choice}>
              {productDetail.choice ? "concious choice" : null}
            </p>
            <h3>{productDetail.title}</h3>
            <h5>
              ￦ {String(productDetail.price).replaceAll(amountRegex, ",")}
            </h5>
            <div className={styles.dropdown} ref={dropDownRef}>
              <button
                className={styles.dropdownToggle}
                onClick={handleToggleDropdown}
              >
                {selectedValue || "사이즈 선택"}
              </button>
              {isOpen && (
                <ul className={styles.dropdownMenu}>
                  {productDetail.size.map((item) => (
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
