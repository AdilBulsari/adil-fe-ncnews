import { useState } from 'react'
import { patchVoteById } from '../API/Api'
import Button from './Button'
import styles from './Vote.module.css'
import likeicon from '../Tools/LikeSVG/likeicon.png'
import dislikeicon from '../Tools/LikeSVG/dislikeicon.png'

function Vote(props) {
    const [disableLikeButton, setDisableLikeButton] = useState(false)
    const [disableUnLikeButton, setDisableUnLikeButton] = useState(false)
    const [error, setError] = useState(false)
    const [hasVoted, setHasVoted] = useState(null)

    function VoteHandlerApi(voteCount) {
        setHasVoted((prevState) => !prevState)
        setDisableLikeButton((prevState) => !prevState)
        if (disableLikeButton) {
            setDisableUnLikeButton(true)
        } else {
            setDisableUnLikeButton(false)
        }

        if (voteCount === 1) {
            props.setVotes((prevVote) => prevVote + 1)
        } else {
            props.setVotes((prevVote) => prevVote - 1)
        }
        patchVoteById(props.article.article_id, voteCount).catch((err) => {
            setError(true)
        })
    }

    return (
        <div className={styles.vote_div}>
            <div className={styles.vote}>
                <p>
                    <b>CLICK TO VOTE</b>
                </p>
                <Button
                    disabled={disableLikeButton}
                    onClick={() => VoteHandlerApi(+1)}
                >
                    <img className={styles.like} alt="like" src={likeicon} />
                </Button>
                <Button
                    disabled={disableUnLikeButton}
                    onClick={() => VoteHandlerApi(-1)}
                >
                    <img
                        alt="unlike"
                        className={styles.unlike}
                        src={dislikeicon}
                    />
                </Button>
            </div>
            {error ? <p> Could not Vote try again ... </p> : null}
            {hasVoted ? <p>You Liked the vote</p> : <p>&nbsp;</p>}
        </div>
    )
}

export default Vote
