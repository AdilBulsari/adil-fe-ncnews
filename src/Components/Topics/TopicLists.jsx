import { Link } from 'react-router-dom'
import styles from './TopicLists.module.css'

function TopicLists({ articles }) {
    return (
        <ul className={styles['card-ul']}>
            {articles.map((eachArticle, index) => (
                <li key={index} className={styles['topicInfo-card']}>
                    <Link
                        className={styles.title}
                        to={'/topics/articles/' + eachArticle.article_id}
                    >
                        <div className={styles.card}>
                            <p className={styles.title}>
                                Title: {eachArticle.title}{' '}
                            </p>
                            <p className={styles['author-name']}>
                                <b>Author: </b>
                                {eachArticle.author}
                            </p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default TopicLists
