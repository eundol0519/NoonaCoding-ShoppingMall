import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../element/Spinner";

import styles from "./List.module.css";
import Card from "../../component/card/Card";

const List = () => {
  const [list, setList] = useState();

  const getProducts = async () => {
    await axios
      .get("http://localhost:5000/products")
      .then((res) => setList(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.wrap}>
      {list ? (
        list.map((item) => {
          return (
            <React.Fragment key={item}>
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
