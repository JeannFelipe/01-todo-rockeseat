import styles from './Logo.module.css';

console.log(styles);

export function Logo(){
    return(
        <div className={styles.logo}>
            <img src="/src/assets/rocket.svg"/>
            <p>to<span>do</span></p>
        </div>
    )
}