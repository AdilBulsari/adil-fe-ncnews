import { Link } from 'react-router-dom'
import styles from './TopicLists.module.css'

function TopicLists({ articles }) {
    return (
        <ul className={styles.card_ul}>
            {articles.map((eachArticle, index) => (
                <li key={index} className={styles.topicInfo_card}>
                    <Link
                        className={styles.title}
                        to={'/topics/articles/' + eachArticle.article_id}
                    >
                        <b className={styles.title}>Title :</b>
                        {eachArticle.title}
                        <p style={{ marginTop: '10px' }}>
                            <b>Author :</b>
                            {eachArticle.author}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default TopicLists
