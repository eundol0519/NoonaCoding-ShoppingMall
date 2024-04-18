import React, { useEffect } from "react";
import Spinner from "../../element/Spinner";

import styles from "./List.module.css";
import Card from "../../component/card/Card";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const [query, setQuery] = useSearchParams();

  const list = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

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
