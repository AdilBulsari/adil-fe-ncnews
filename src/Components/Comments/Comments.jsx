import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByArticleId } from '../API/Api'
import styles from '../Comments/Comments.module.css'
import CommentDelete from './CommentDelete'

function Comments() {
    const { article_id } = useParams()
    const [comments, setComments] = useState([])
    useEffect(() => {
        getCommentsByArticleId(article_id).then((data) => {
            setComments(data)
        })
    }, [article_id])

    return (
        <ul className={styles['comment-container']}>
            {comments.map((comment) => {
                return (
                    <li
                        className={styles['comment-card']}
                        key={comment.comment_id}
                    >
                        <p>
                            <b>Comment :</b> {comment.body}
                        </p>
                        <p>
                            <b>Author :</b>
                            {comment.author}
                        </p>

                        <p>
                            <b>Date :</b>
                            {new Date(comment.created_at).toDateString()}
                        </p>
                        <div className={styles.comment}>
                            <CommentDelete
                                comments={comments}
                                setComments={setComments}
                                comment={comment}
                            />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Comments
