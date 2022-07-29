import styles from '../Comments/AddComment.module.css'
function AddComment() {
    return (
        <div>
            <h1>Would you like to comment on this article ?</h1>
            <form className={styles.form}>
                Username
                <input type="text" />
                Comment
                <input type="text" />
                <button className={styles.comment_button}>Submit</button>
            </form>
        </div>
    )
}
export default AddComment
