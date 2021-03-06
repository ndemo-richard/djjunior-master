// components/Header.js
import Link from "next/link";


import styles from "../styles/Header.module.scss";

const Header = props => (
  <Link passHref href="/">
    <div className={styles.Header}>{props.appTitle}</div>
  </Link>
);

export default Header;