import { useState } from 'react'
import { patchVoteById } from '../API/Api'
import styles from './Vote.module.css'
import upVote from '../../assets/bottom-angle-arrow-bold-icon.svg'
import downVote from '../../assets/top-angle-arrow-bold-icon.svg'

function Vote(props) {
    const [error, setError] = useState(false)

    function VoteHandlerApi(voteCount) {
        if (!voteCount) {
            patchVoteById(props.article.article_id, 1).catch(() => {
                setError(true)
            })
            props.setVotes((prevVote) => prevVote + 1)
        } else {
            patchVoteById(props.article.article_id, -1).catch(() => {
                setError(true)
            })
            props.setVotes((prevVote) => prevVote - 1)
        }
    }

    return (
        <div className={styles.vote}>
            <img
                onClick={() => VoteHandlerApi(true)}
                className={styles.like}
                alt="like"
                src={upVote}
            />

            <img
                onClick={() => VoteHandlerApi(false)}
                alt="unlike"
                className={styles.unlike}
                src={downVote}
            />

            {error ? <p> Could not vote try again ... </p> : null}
        </div>
    )
}

export default Vote
