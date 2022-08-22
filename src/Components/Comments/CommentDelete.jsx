import React, { useContext } from 'react'
import styles from './CommentDelete.module.css'
import { deleteComment } from '../API/Api'
import { UserContext } from '../User/User'

const CommentDelete = ({ comments, setComments, comment }) => {
    const { loggedInUser } = useContext(UserContext)

    const handleDelete = () => {
        return deleteComment(comment.comment_id).then(() => {
            const filterComments = comments.filter(
                (com) => com.comment_id !== comment.comment_id
            )
            setComments(filterComments)
        })
    }

    return (
        <div>
            {loggedInUser.username === comment.author && (
                <button className={styles.delete_button} onClick={handleDelete}>
                    Delete
                </button>
            )}
        </div>
    )
}

export default CommentDelete
