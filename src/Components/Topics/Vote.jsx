import { useState } from 'react'
import { patchVoteById } from '../API/Api'
import Button from './Button'
import styles from './Vote.module.css'

function Vote(props) {
    const [disableLikeButton, setDisableLikeButton] = useState(false)
    const [disableUnLikeButton, setDisableUnLikeButton] = useState(true)
    const [error, setError] = useState(false)

    function VoteHandlerApi(voteCount) {
        setDisableLikeButton((prevState) => !prevState)
        if (voteCount === 1) {
            props.setVotes((prevVote) => prevVote + 1)
        } else {
            props.setVotes((prevVote) => prevVote - 1)
        }
        patchVoteById(props.article.article_id, voteCount).catch((err) => {
            setError(true)
        })
        setDisableUnLikeButton((prevState) => !prevState)
    }

    return (
        <div className={styles.vote}>
            <p>
                <b>CLICK TO VOTE</b>
            </p>
            <Button
                disabled={disableLikeButton ? 'disabled' : ''}
                onClick={() => VoteHandlerApi(+1)}
            >
                <img
                    className={styles.like}
                    alt="like"
                    src={require('../Tools/LikeSVG/likeicon.png')}
                />
            </Button>
            <Button
                disabled={disableUnLikeButton ? 'disabled' : ''}
                onClick={() => VoteHandlerApi(-1)}
            >
                <img
                    alt="unlike"
                    className={styles.unlike}
                    src={require('../Tools/LikeSVG/dislikeicon.png')}
                />
            </Button>
            {error ? <p> Could not Vote try again ... </p> : null}
        </div>
    )
}

export default Vote
