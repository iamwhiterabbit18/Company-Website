import React from 'react';
import style from './Navbar.module.scss';

function Navbar() {
  return (
    <>
    <nav>
        <div className={style.sectionPrev}>
            <img src="navbar-icon.png" alt="" />
            <h6>Home</h6>
        </div>
        <a href="#">
            <img src="logo.png  " alt="" />
        </a>
    </nav>
    </>
  )
}

export default Navbar