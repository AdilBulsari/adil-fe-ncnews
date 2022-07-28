import { Link } from 'react-router-dom'
import styles from './TopicLists.module.css'

function TopicLists({ article }) {
    return (
        <ul className={styles.card_ul}>
            {article.map((eachArticle, index) => (
                <li key={index} className={styles.topicInfo_card}>
                    <p>
                        <Link to={'/api/articles/' + eachArticle.article_id}>
                            <b>Title :</b> {eachArticle.title}
                        </Link>
                    </p>
                    <p>
                        <b>Author :</b>
                        {eachArticle.author}
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default TopicLists
