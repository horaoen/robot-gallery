import styles from "./App.module.css";
import Robot from "./components/Robot";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";
import { useEffect, useState } from "react";
import React from "react";

const App: React.FC = () => {
  const [robotGallery, setRobotGallery] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotGallery(data);
        setError("");
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人</h1>
      </div>
      <ShoppingCart />

      {error && <h1>{error}</h1>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery?.map((robot) => (
            <Robot id={robot.id} email={robot.email} name={robot.name} />
          ))}
        </div>
      ) : (
        <h1>loading.....</h1>
      )}
    </div>
  );
};

export default App;
