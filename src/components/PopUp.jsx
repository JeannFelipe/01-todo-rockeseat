import styles from './PopUp.module.css';
import { useState } from 'react';

export function PopUp({ textPopUp, popUp, setPopUp}){

    const [classeBox, setClasseBox] = useState(styles.popUp);

    const [classeBgd, setClasseBgd] = useState(styles.bgd);

    function Entendido(){
        setClasseBox(`${styles.popUp} ${styles.popUpLeave}`);
        setClasseBgd(`${styles.bgd} ${styles.bgdLeave}`)

        setTimeout(function(){
            setPopUp(0);
            setClasseBox(`${styles.popUp}`);
            setClasseBgd(`${styles.bgd}`)
        }, 480)
    }
    if (popUp == 0){
        return(
            <></>
        )
    }
    if (popUp == 1){
        return(
            <div className={classeBgd}>
                <div className={classeBox}>
                    <p>{textPopUp}</p>
                    <button onClick={Entendido}>Entendido</button>
                </div>
            </div>
        )
    }
}