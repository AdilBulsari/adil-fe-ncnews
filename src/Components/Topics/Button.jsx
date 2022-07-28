function Button(props) {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={props.className}
        >
            {props.children}
        </button>
    )
}

export default Button
