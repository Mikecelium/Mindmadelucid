import React, { useEffect, useState } from 'react'
import styles from "./content2.module.css"



const Info = ({visibillity}) => {
    const [isWide, setIsWide] = useState(false);
    const wide = styles.wide;
    const visible = styles.visible;
    const invisible = styles.invisible;

    const handleClick = ()=> {
        setIsWide(!isWide);
    }

    return (
            <div className={`${styles.content2} ${visibillity ? visible : invisible}`} onClick={handleClick}>
                <div className={`${styles.innerContainer}  ${isWide ? wide : ""}`}>
                    <h1>What is Lucid Dreaming?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam soluta, odit excepturi est, et voluptatem doloremque cumque sint saepe nobis aliquam sed maxime recusandae delectus vel eius. A, repellat!</p>
                    <p className={styles.learnMore}>Click to learn more</p>
                    <h1 className={styles.hiddenText}> Lucid Dreaming for Lucid Living </h1>
                    <p className={styles.hiddenText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam soluta, odit excepturi est, et voluptatem doloremque cumque sint saepe nobis aliquam sed maxime recusandae delectus vel eius. A, repellat!</p>
                    <p className={styles.hiddenText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam soluta, odit excepturi est, et voluptatem doloremque cumque sint saepe nobis aliquam sed maxime recusandae delectus vel eius. A, repellat!</p>
                    <p className={styles.hiddenText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam soluta, odit excepturi est, et voluptatem doloremque cumque sint saepe nobis aliquam sed maxime recusandae delectus vel eius. A, repellat!</p>
                    <p className={styles.hiddenText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam soluta, odit excepturi est, et voluptatem doloremque cumque sint saepe nobis aliquam sed maxime recusandae delectus vel eius. A, repellat!</p>

                </div>
            </div>    
    );
}

export default Info

