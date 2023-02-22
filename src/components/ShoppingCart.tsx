import React, { useContext, useState } from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";

const ShoppingCart: React.FC = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(appContext);

  return (
    <div className={styles.cartContainer}>
      <button
        className={styles.button}
        onClick={() => {
          setOpen(preState => !preState);
        }}
      >
        <FiShoppingCart />
        <span>购物车 {context.shoppringCart.items.length} (件)</span>
      </button>
      <div
        className={styles.cartDropDown}
        style={{
          display: open ? "block" : "none",
        }}
      >
        <ul>
          {context.shoppringCart.items.map((e) => (<li>{e.name}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
