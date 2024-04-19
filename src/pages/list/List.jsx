import React, { useEffect } from "react";
import Spinner from "../../element/Spinner";

import styles from "./List.module.css";
import Card from "../../component/card/Card";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";

const List = () => {
  const [query, setQuery] = useSearchParams();

  const list = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsHandler();
  }, [query]);

  const getProductsHandler = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(getProducts(searchQuery));
  };

  return (
    <div className={styles.wrap}>
      {list ? (
        list.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <Card data={item} />
            </React.Fragment>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default List;
