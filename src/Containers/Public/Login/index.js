import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  return <div className={styles.container}>login</div>;
};

export default observer(Login);
