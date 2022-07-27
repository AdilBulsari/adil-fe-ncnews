import styles from './Button.module.css'

function Button(props) {
    return <button className={styles.nc_button}>{props.children}</button>
}

export default Button
