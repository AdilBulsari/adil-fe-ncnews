import styles from './Button.module.css'

function Button(props) {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={styles.nc_button}
        >
            {props.children}
        </button>
    )
}

export default Button
