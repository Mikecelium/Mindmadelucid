import React, { useEffect, useState } from 'react'
import styles from "./content3.module.css"



const Info = ({visibillity}) => {
    const [isWide, setIsWide] = useState(false);
    const wide = styles.wide;
    const visible = styles.visible;
    const invisible = styles.invisible;

    const handleClick = ()=> {
        setIsWide(!isWide);
    }

    return (
            <div className={`${styles.content3} ${visibillity ? visible : invisible}`} onClick={handleClick}>
                <div className={`${styles.innerContainer}  ${isWide ? wide : ""}`}>
                    <h1>Products</h1>
                    <p>COMING SOON!</p>
                    <p className={styles.hiddenText}>THIS TEXT IS HIDDEN</p>
                </div>
            </div>    
    );
}

export default Info

