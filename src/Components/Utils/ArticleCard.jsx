import styles from './ArticleCard.module.css'

function ArticleCard({ article, votes }) {
    return (
        <div>
            <h1> {article.title}</h1>
            <div className={styles.description}>
                <div className={styles.article_view}>
                    <p>
                        <b>Title : </b>
                        {article.title}
                    </p>
                    <p>
                        <b>Author :</b> {article.author}
                    </p>
                    <p>
                        <b>Description :</b> {article.body}
                    </p>
                    <p>
                        <b>Topic : </b>
                        {article.topic}
                    </p>
                    {
                        <p>
                            <b>Votes : </b>
                            {votes ? votes : article.votes}
                        </p>
                    }
                    <p>
                        <b>Comments made :</b> {article.total_comments}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
