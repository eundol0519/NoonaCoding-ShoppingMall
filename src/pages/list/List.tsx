import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../element/Spinner";

import styles from "./List.module.css";
import Card from "../../component/card/Card";
import { useSearchParams } from "react-router-dom";
import { ItemType } from "../../types";

const List = () => {
  const [list, setList] = useState<ItemType[]>();

  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    await axios
      .get(
        `https://my-json-server.typicode.com/eundol0519/NoonaCoding-ShoppingMall/products?q=${searchQuery}`,
      )
      .then((res) => setList(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className={styles.wrap}>
      {list ? (
        list.map((item: ItemType) => {
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
