import { Link } from 'react-router-dom'
import styles from './ArticleCard.module.css'

function ArticleCard({ article }) {
    return (
        <div>
            <ul className={styles.card_ul}>
                {article.map((eachArticle) => (
                    <li className={styles.topicInfo_card}>
                        <p>
                            <Link
                                to={'/api/articles/' + eachArticle.article_id}
                            >
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
        </div>
    )
}

export default ArticleCard
