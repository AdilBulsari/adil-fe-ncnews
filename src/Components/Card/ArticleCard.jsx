import styles from '../Card/ArticleCard.module.css'

function ArticleCard({ article }) {
    return (
        <div>
            <ul className={styles.card_ul}>
                {article.map((eachArticle) => (
                    <li className={styles.topicInfo_card}>
                        <p>
                            <b>Title :</b> {eachArticle.title}
                        </p>
                        <p>
                            <b>Author :</b>
                            {eachArticle.author}
                        </p>
                        <p>
                            <b>Votes :</b>
                            {eachArticle.votes}
                        </p>
                        <p>
                            <b>Date Posted :</b>
                            {eachArticle.created_at}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleCard
