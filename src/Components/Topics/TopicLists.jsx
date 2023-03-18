import { Link } from 'react-router-dom'
import styles from './TopicLists.module.css'

function TopicLists({ article }) {
    return (
        <ul className={styles.card_ul}>
            {article.map((eachArticle, index) => (
                <li key={index} className={styles.topicInfo_card}>
                    <p>
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
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default TopicLists
