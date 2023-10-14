
import React from "react";
import logo from './images/mindmadelucid.png'


// import './Navbar.css'
import styles from "./Navbar.module.css"

const Navbar1 = () => {

    const handleClick = ()=> {
        const linkDiv = document.querySelector(`.${styles.linkDiv}`);
        linkDiv.classList.toggle(styles.active);
    }

    const scroll2Content = (e) => {
        const targetName = e.target.getAttribute('name')
        const target = document.getElementsByClassName(targetName)[0];
        const scrollX = target.offsetTop-100
        window.scrollTo(0, scrollX);
    }


    return (
        <nav>
            <div className={styles.brandDiv}>
                <img src={logo} alt="mind made lucid logo"/>
                <h2>@</h2>
                <h1>m i n d m a d e l u c i d</h1>

            </div>

            <p className={styles.hamburger} onClick={handleClick}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </p>

            <div className={styles.linkDiv}>
                <ul>
                    <li><p name ='scroller1' onClick={scroll2Content}>Home</p></li>
                    <li><p name ='scroller2' onClick={scroll2Content}>Dreaming</p></li>
                    <li><p name ='scroller3' onClick={scroll2Content}>Products</p></li>
                    <li><p name ='scroller4' onClick={scroll2Content}>Contact</p></li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar1