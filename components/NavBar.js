import React from 'react';
import Link from 'next/link'
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
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/"><a>Home</a></Link></li>
      
      
  </ul>

</div>
)

export default Navbar
