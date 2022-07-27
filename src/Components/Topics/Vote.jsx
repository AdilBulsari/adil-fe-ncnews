import { useState } from 'react'
import { patchVoteById } from '../API/Api'
import Button from './Button'
import styles from './Vote.module.css'

function Vote(props) {
    const [disableLikeButton, setDisableLikeButton] = useState(false)
    const [disableUnLikeButton, setDisableUnLikeButton] = useState(true)

    function increaseVoteHandlerApi() {
        setDisableUnLikeButton((prevState) => !prevState)
        props.setVotes((prevVote) => prevVote + 1)
        patchVoteById(props.article.article_id, 1)
        setDisableLikeButton((prevState) => !prevState)
    }

    function decreaseVoteHandlerApi() {
        setDisableLikeButton((prevState) => !prevState)
        props.setVotes((prevVote) => prevVote - 1)
        patchVoteById(props.article.article_id, -1)
        setDisableUnLikeButton((prevState) => !prevState)
    }

    return (
        <div className={styles.vote}>
            <p>
                <b>CLICK TO VOTE</b>
            </p>
            <Button
                disabled={disableLikeButton ? 'disabled' : ''}
                onClick={increaseVoteHandlerApi}
            >
                <img
                    className={styles.like}
                    alt="like"
                    src={require('../Tools/LikeSVG/likeicon.png')}
                />
            </Button>
            <Button
                disabled={disableUnLikeButton ? 'disabled' : ''}
                onClick={decreaseVoteHandlerApi}
            >
                <img
                    alt="unlike"
                    className={styles.unlike}
                    src={require('../Tools/LikeSVG/dislikeicon.png')}
                />
            </Button>
        </div>
    )
}

export default Vote
