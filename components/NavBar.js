import React from 'react';
import styles from '../styles/NavBar.module.scss';
const Navbar = () => (


<div className={styles.nav}>
    <input className={styles.menu_toggle} type="checkbox" id="menu-toggle"/>
  <label className={styles.mobile_menu_label} htmlFor="menu-toggle">
      <div className={styles.menu_icon}>
			<span></span>
			<span></span>
			<span></span>
		</div>
  </label>

  <ul className={styles.menu}>
      <li><a href="/">Home</a></li>
      <li><a href="#shengbook">Sheng HandBook</a></li>
      <li><a href="#clips">Clips</a></li>
      
      <li><a href="/">Music</a></li>
      
  </ul>

</div>
)

export default Navbar
