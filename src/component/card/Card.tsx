import { useId } from "react";

import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { amountRegex } from "../../utils/regex";

import { ItemType } from "../../types/index";

const Card = ({ data }: { data: ItemType }) => {
  const id = useId();
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/products/${data.id}`);
      }}
    >
      <img src={data.img} width={150} height={200} alt={`productImg${id}`} />
      <span>{data.choice ? "concious choice" : null}</span>
      <h5>{data.title}</h5>
      <p>￦ {String(data.price).replaceAll(amountRegex, ",")}</p>
      <span className={styles.new}>{data.new ? "new" : null}</span>
    </div>
  );
};

export default Card;
