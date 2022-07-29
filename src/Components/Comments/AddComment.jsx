import { useState } from 'react'
import { postCommentByArticleId } from '../API/Api'
import styles from '../Comments/AddComment.module.css'

function AddComment({ article_id }) {
    const [form, setForm] = useState({
        username: '',
        body: '',
    })

    const [isError, setIsError] = useState(false)
    const [isvalidFormField, setIsValidFormField] = useState(true)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

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
        <div>
            <h1>Would you like to comment on this article ?</h1>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                Existing Author
                <input
                    type="text"
                    name="username"
                    onChange={inputChangeHandler}
                    value={form.username}
                />
                Comment
                <input
                    type="text"
                    name="body"
                    onChange={inputChangeHandler}
                    value={form.body}
                />
                <button
                    disabled={!isvalidFormField}
                    type="submit"
                    className={styles.comment_button}
                >
                    Submit
                </button>
                {!isvalidFormField ? (
                    <p>
                        Enter correct{' '}
                        {isFieldValid(form.body) ? 'comment' : 'author name'}
                    </p>
                ) : (
                    ''
                )}
                {isError ? <p>Invalid username</p> : null}
                {isFormSubmitted ? <p>Form submitted successfully</p> : ''}
            </form>
        </div>
    )
}
export default AddComment
