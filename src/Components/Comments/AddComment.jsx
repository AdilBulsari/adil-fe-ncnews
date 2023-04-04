import { useContext, useState } from 'react'
import { postCommentByArticleId } from '../API/Api'
import styles from '../Comments/AddComment.module.css'
import { UserContext } from '../User/User'

function AddComment({ article_id }) {
    const { loggedInUser } = useContext(UserContext)
    const [isError, setIsError] = useState(false)
    const [isvalidFormField, setIsValidFormField] = useState(true)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const [form, setForm] = useState({
        username: loggedInUser.username,
        body: '',
    })
    function isFieldValid(data) {
        return data.length > 3
    }

    function inputChangeHandler(e) {
        const { value, name } = e.target
        setIsValidFormField(isFieldValid(value) && isFieldValid(name))
        setForm({
            ...form,
            [name]: value,
        })
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        console.log(form)
        if (isFieldValid(form.body) && isFieldValid(form.username)) {
            postCommentByArticleId(article_id, form)
                .then(() => {
                    setIsError(false)
                    setForm({
                        username: '',
                        body: '',
                    })
                    setIsFormSubmitted(true)
                })
                .catch(() => {
                    setIsError(true)
                })
        }
    }

    return (
        <div className={styles.container}>
            <h1>Would you like to comment on this article ?</h1>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <label>Logged In Author</label>

                <input
                    name="username"
                    disabled
                    placeholder={loggedInUser.name}
                />

                <label>Comment </label>
                <input
                    type="text"
                    className="border outline-none"
                    name="body"
                    onChange={inputChangeHandler}
                    value={form.body}
                />
                <button
                    disabled={!isvalidFormField}
                    type="submit"
                    className={styles['comment-button']}
                >
                    Submit
                </button>
                {isError ? (
                    <p className={styles['invalid-user']}>
                        Enter a valid username
                    </p>
                ) : null}
                {isFormSubmitted ? (
                    <p className={styles['comment-success']}>
                        Comment posted successfully !!
                    </p>
                ) : (
                    ''
                )}
            </form>
        </div>
    )
}
export default AddComment
