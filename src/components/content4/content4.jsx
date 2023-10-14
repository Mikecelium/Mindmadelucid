import React, { useEffect, useState } from 'react'
import styles from "./content4.module.css"



const Info = ({visibillity}) => {
    const [isWide, setIsWide] = useState(false);
    const wide = styles.wide;
    const visible = styles.visible;
    const invisible = styles.invisible;

    const handleClick = ()=> {
        setIsWide(!isWide);
    }

    return (
            <div className={`${styles.content4} ${visibillity ? visible : invisible}`} onClick={handleClick}>
                <div className={`${styles.innerContainer}  ${isWide ? wide : ""}`}>
                    <h1>Contact Me!</h1>
                    <p>FACEBOOK</p>
                    <p>INSTAGRAM</p>
                    <p>EMAIL</p>
                    <p>PIGEON</p>
                    <p className={styles.hiddenText}>THIS TEXT IS HIDDEN</p>
                </div>
            </div>    
    );
}

export default Info

