import { useState } from 'react'
import { patchVoteById } from '../API/Api'
import Button from './Button'
import styles from './Vote.module.css'
import likeicon from '../Tools/LikeSVG/likeicon.png'
import dislikeicon from '../Tools/LikeSVG/dislikeicon.png'

function Vote(props) {
    const [likeButton, setLikeButton] = useState(false)
    const [disLikeButton, setDisLikeButton] = useState(false)
    const [error, setError] = useState(false)

    function VoteHandlerApi(voteCount) {
        if (voteCount === 1) {
            setLikeButton((prevState) => !prevState)
            if (likeButton) {
                patchVoteById(props.article.article_id, -1).catch(() => {
                    setError(true)
                })
                return props.setVotes((prevVote) => prevVote - 1)
            }
            if (disLikeButton) {
                setDisLikeButton(false)
            }
            props.setVotes((prevVote) => prevVote + 1)
            patchVoteById(props.article.article_id, voteCount).catch(() => {
                setError(true)
            })
        } else {
            setDisLikeButton((prevState) => !prevState)
            if (disLikeButton) {
                patchVoteById(props.article.article_id, 1).catch(() => {
                    setError(true)
                })
                return props.setVotes((prevVote) => prevVote + 1)
            }
            if (likeButton) {
                setLikeButton(false)
            }
            props.setVotes((prevVote) => prevVote - 1)
            patchVoteById(props.article.article_id, voteCount).catch(() => {
                setError(true)
            })
        }
    }

    return (
        <div className={styles.vote_div}>
            <div className={styles.vote}>
                <p>
                    <b>CLICK TO VOTE</b>
                </p>
                <Button
                    onClick={() => VoteHandlerApi(+1)}
                    className={
                        likeButton
                            ? styles.nc_button_selected
                            : styles.nc_button
                    }
                >
                    <img className={styles.like} alt="like" src={likeicon} />
                </Button>
                <Button
                    // disabled={disLikeButton}
                    onClick={() => VoteHandlerApi(-1)}
                    className={
                        disLikeButton
                            ? styles.nc_button_selected
                            : styles.nc_button
                    }
                >
                    <img
                        alt="unlike"
                        className={styles.unlike}
                        src={dislikeicon}
                    />
                </Button>
            </div>
            {error ? <p> Could not Vote try again ... </p> : null}
        </div>
    )
}

export default Vote
