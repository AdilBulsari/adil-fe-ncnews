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
        <div>
            <ul className={styles.comment}>
                {comments.map((comment) => {
                    return (
                        <li
                            className={styles.comment_card}
                            key={comment.comment_id}
                        >
                            <p>
                                <b>comment :</b> {comment.body}
                            </p>
                            <p>
                                <b>Author :</b>
                                {comment.author}
                            </p>

                            <p>
                                <b>Date :</b>
                                {Date(comment.created_at).toLocaleString()}
                            </p>
                            <CommentDelete
                                comments={comments}
                                setComments={setComments}
                                comment={comment}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Comments
