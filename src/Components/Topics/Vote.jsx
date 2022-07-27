import Button from './Button'
import styles from './Vote.module.css'

function Vote() {
    return (
        <div className={styles.vote}>
            <p>Click to vote for article</p>
            <Button>Vote +</Button>
            <Button>Vote -</Button>
        </div>
    )
}

export default Vote
