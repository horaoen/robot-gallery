import { useContext } from "react";
import { appContext, appSetStateContext } from "../AppState";
import styles from "./Robot.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext)
  const addToCart = () => {
    if (setState) {
      setState(preState => {
        return {
          ...preState,
          shoppringCart: {
            items: [...preState.shoppringCart.items, { id, name }]
          }
        }
      })
    }
  }

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  );
};

export default Robot;
