import React, { useId } from "react";

import styles from "./Card.module.css";

const Card = ({ data }) => {
  const id = useId();

  return (
    <div className={styles.card}>
      <img src={data.img} width={150} height={200} alt={`productImg${id}`} />
      <span>{data.choice ? "concious choice" : null}</span>
      <h5>{data.title}</h5>
      <p>{data.price}</p>
      <span className={styles.new}>{data.new ? "new" : null}</span>
    </div>
  );
};

export default Card;
